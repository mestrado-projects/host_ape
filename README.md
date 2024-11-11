# Sistema de Reservas de Apartamentos

Este sistema web, desenvolvido com React, permite a gestão de reservas de apartamentos. Ele está estruturado de acordo com os critérios arquitetônicos MVC e REST, garantindo uma separação clara entre as funções do sistema e uma experiência de usuário otimizada.

## Requisitos Funcionais

1. **Escolher Apartamento**  
   - O sistema deve permitir ao visitante selecionar um apartamento específico para visualização de detalhes.
   - **Endpoints**:
     - **GET /apartamentos**: Retorna a lista de apartamentos disponíveis.
     - **GET /apartamento/{id}**: Retorna os detalhes de um apartamento específico.

2. **Visualização de Estado da Reserva**  
   - **Visitante (Guest)**: Visualização da landing page com informações básicas sobre o local e fotos.
   - **Hóspede**: Visualização de informações adicionais como senha do Wi-Fi e das portas, regras da casa, e opções turísticas (acessíveis até a data de check-out).
   - **Administrador (Admin)**: Visualização e acesso para cadastrar novas reservas.
   - **Endpoints**:
     - **POST /login**: Realiza a autenticação de usuário com duas roles (Guest e Admin).
     - **GET /reserva/{id}**: Retorna o status e os detalhes da reserva com base no perfil do usuário autenticado.

3. **Landing Page**  
   - Exibe fotos, ícones informativos, e campos sobre a hospedagem e a localização.
   - Mostra informações turísticas e permite a seleção de datas de check-in e check-out.
   - **Endpoints**:
     - **GET /acomodacao**: Recupera informações da acomodação.
     - **POST /reserva/solicitar**: Envia uma solicitação de reserva (pode incluir redirecionamento para WhatsApp).

4. **Informações de Reserva para o Hóspede**  
   - Exibe dados como endereço, senha do Wi-Fi, senha das portas, regras da casa e opções turísticas integradas ao Google Maps.
   - **Endpoints**:
     - **GET /acomodacao**: Recupera informações da acomodação.
     - **GET /reserva/{id}**: Recupera detalhes da reserva para o hóspede autenticado.

5. **Envio de Sugestões ou Comentários**  
   - Permite ao hóspede enviar feedback e sugestões, incluindo uma opção para solicitar uma nova reserva com desconto.
   - **Endpoint**:
     - **POST /feedback**: Recebe sugestões e solicitações de reserva com possibilidade de redirecionamento para WhatsApp com desconto aplicado.

6. **Formulário para Solicitação de Reserva**  
   - Disponibiliza um formulário para solicitação de reserva que, ao ser preenchido, envia uma mensagem automática para o WhatsApp.
   - **Endpoint**:
     - **POST /reserva/solicitar**: Envia a solicitação de reserva.

7. **Cadastro de Novas Reservas (Admin)**  
   - Permite ao administrador cadastrar reservas diretamente, gerando logins temporários para novos hóspedes.
   - **Endpoints**:
     - **POST /reserva/cadastrar**: Cadastra uma nova reserva.
     - **PUT /acomodacao/{id}**: Permite ao administrador atualizar informações restritas da acomodação.
     - **DELETE /acomodacao/{id}**: Remove uma acomodação específica, acesso restrito ao administrador.

8. **Gerenciamento de Acessos**  
   - Permite ao administrador gerenciar acessos temporários de hóspedes e desativá-los automaticamente após o check-out.
   - **Endpoints**:
     - **POST /acesso/temporario**: Cria um login temporário para o hóspede.
     - **DELETE /acesso/temporario/{id}**: Remove acesso de hóspedes após o check-out.

9. **Atualização de Informações de Acomodações**  
   - Permite ao administrador atualizar informações de acomodações, como endereço, senhas, e regras da casa.
   - **Endpoint**:
     - **PUT /acomodacao/{id}**: Atualiza dados de uma acomodação específica.

10. **Notificação de Submissão de Reserva para o Administrador**  
   - Notifica o administrador sobre uma nova submissão de reserva, permitindo que ele acompanhe e aprove as solicitações.
   - **Endpoint**:
     - **POST /reserva/notificar-admin**: Envia notificação ao administrador sobre uma nova reserva.

