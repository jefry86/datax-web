package com.wugui.datax.admin.config;

import com.wugui.datax.admin.interceptors.MyControllerInterceptor;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 前端静态资源访问
 *
 * @program: com.wugui.datax-all
 * @author: huzekang
 * @create: 2019-06-17 10:40
 **/
@Configuration

public class WebConfig implements WebMvcConfigurer {


    @Bean
    MyControllerInterceptor myControllerInterceptor(){
        return new MyControllerInterceptor();
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(myControllerInterceptor())
                .addPathPatterns("/api/**");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/index.html").addResourceLocations("classpath:/static/index.html");
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/static/");
    }

    @Bean
    public ConfigurableServletWebServerFactory webServerFactory() {
        TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory();
        factory.addConnectorCustomizers(connector -> connector.setProperty("relaxedQueryChars", "\"<>[\\]^`{|}"));
        factory.addConnectorCustomizers(connector -> connector.setProperty("sendReasonPhrase", "true"));

        return factory;
    }



}
