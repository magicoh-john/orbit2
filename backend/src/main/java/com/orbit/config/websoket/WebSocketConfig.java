package com.orbit.config.websoket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * 웹소켓 설정
 * - STOMP 프로토콜을 사용하여 실시간 메시징을 처리하기 위한 설정
 * - 웹소켓을 사용하기 위한 설정 클래스
 * - WebSocketConfig는 STOMP 프로토콜을 사용하여 메시지를 주고받기 위한 설정
 * - STOMP 프로토콜을 사용하여 메시지 브로커를 설정, 메시지 브로커란 메시지를 중계하는 역할, 클라이언트와 서버 간의 메시지 교환을 돕는다.
 * - "/ws" 경로로 STOMP 웹소켓 엔드포인트를 등록, 클라이언트는 이 경로로 접속하여 웹소켓 연결을 요청, 웹소켓 연결을 요청하는 이유는? 웹소켓을 사용하여 실시간으로 메시지를 주고받기 위함
 * - "/topic"으로 시작하는 메시지를 메시지 브로커로 라우팅, 메시지 브로커는 이 메시지를 구독하고 있는 클라이언트에게 메시지를 전달, 클라이언트는 이 메시지를 구독하고 있다가 메시지를 받으면 화면에 표시
 * - "/app"으로 시작하는 메시지를 컨트롤러로 라우팅, 컨트롤러는 이 메시지를 처리하여 결과를 반환, 클라이언트는 이 결과를 화면에 표시, 이때 메시지 브로커는 라우팅만 수행하고 메시지를 중계하지 않음, 중계는 메시지 브로커가 수행
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    /**
     * 🔹 STOMP 웹소켓 엔드포인트 등록
     * - STOMP 프로토콜 : 웹소켓을 사용하기 위한 하위 프로토콜로 메시지 전송을 단순화하는 프로토콜, 메시지 전송을 위한 프로토콜
     * - /ws 엔드포인트로 클라이언트가 WebSocket 연결을 요청할 수 있도록 설정합니다. 이 엔드포인트에 SockJS를 사용하여 연결을 시도합니다.
     * - /ws 로 접속하면 SockJS를 통해 WebSocket 연결을 시도합니다. 즉 웹소켓을 활성화 하기 위한 설정
     * - 웹소켓 연결을 요청하는 이유는? 웹소켓을 사용하여 실시간으로 메시지를 주고받기 위함
     * - setAllowedOrigins("http://localhost:3000"): 클라이언트가 React에서 실행 중일 때, localhost:3000에서의 요청만
     *   허용합니다. 다른 도메인에서의 연결을 차단합니다.
     * - withSockJS()는 WebSocket이 지원되지 않는 환경에서 SockJS를 사용하여 대체 방식으로 연결을 시도합니다.
     * @param registry STOMP 엔드포인트 등록을 위한 레지스트리
     */
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOrigins("http://localhost:3000").withSockJS();
    }

    /**
     * 🔹 메시지 브로커 설정
     * - "/topic"으로 시작하는 메시지를 메시지 브로커로 라우팅, 채팅방 등 그룹 채팅을 위한 설정
     * - /queue → 개인 메시지 (1:1 채팅) → 예: /queue/user-100
     * - 메시지 브로커는 이 메시지를 구독하고 있는 클라이언트에게 메시지를 전달
     * - 클라이언트는 이 메시지를 구독하고 있다가 메시지를 받으면 화면에 표시
     * - "/app"으로 시작하는 메시지를 컨트롤러로 라우팅, 컨트롤러에서 처리
     * - 컨트롤러는 이 메시지를 처리하여 결과를 반환, 클라이언트는 이 결과를 화면에 표시
     * - 이때 메시지 브로커는 라우팅만 수행하고 메시지를 중계하지 않음, 중계는 메시지 브로커가 수행
     * - setApplicationDestinationPrefixes("/app"): 클라이언트가 서버로 보내는 메시지가 /app으로 시작하는 경우
     *   컨트롤러에서 처리되도록 라우팅합니다.
     * @param registry 메시지 브로커 설정을 위한 레지스트리
     */
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic", "/queue");
        registry.setApplicationDestinationPrefixes("/app");
    }
}
