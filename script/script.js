function changeContent(buttonNumber) {
  // Obtém o elemento de conteúdo
  var content = document.getElementById("content");

  // Altera o conteúdo com base no botão clicado
  switch (buttonNumber) {
    case 1:
      content.innerHTML =
     `<style>
     
        ul {
        text-align:left;
          padding-left: 20px; /* Adicione um valor menor para reduzir o recuo à esquerda */
          
        }
        li{
        font-size:20px;
          margin-top:15px;
        
        }
       
        
      </style>
     
     

<ul>
  <li><strong>Respeito:</strong> Respeite todos os jogadores e membros da equipe. Comportamento desrespeitoso não será tolerado.</li>
  
  <li><strong>Vandalismo:</strong> Não é permitido destruir ou modificar a propriedade de outros jogadores sem permissão.</li>
  
  <li><strong>Trapaças:</strong> O uso de cheats, mods ou qualquer forma de trapaça é estritamente proibido.</li>
  
  <li><strong>Linguagem Inapropriada:</strong> Evite o uso de linguagem ofensiva ou inadequada no chat do servidor.</li>
  
  <li><strong>Griefing:</strong> Não cause danos intencionais às construções de outros jogadores ou à experiência de jogo.</li>
  
  <li><strong>Respeito pelas Regras:</strong> Siga todas as regras específicas do servidor, que podem ser encontradas em locais designados.</li>
  
  <li><strong>Comunidade Amigável:</strong> Mantenha um ambiente amigável e acolhedor para todos os jogadores, independentemente de idade, gênero ou origem.</li>
  
  <li><strong>Proteção de Conteúdo:</strong> Respeite os direitos autorais e não compartilhe ou use conteúdo protegido por direitos autorais sem permissão.</li>
  
  <li><strong>Colaboração:</strong> Incentivamos a colaboração e a construção em equipe. Trabalhe junto com outros jogadores para criar experiências incríveis.</li>
  
  <li><strong>Inatividade:</strong> Jogadores inativos por 10 dias consecutivos serão removidos automaticamente do servidor.</li>
  
  <li><strong>PvP em Safe Zone:</strong> Não é permitido combate entre jogadores (PvP) em áreas designadas como "Safe Zones" (zonas seguras).</li>

  <li><strong>Consequências:</strong> O não cumprimento destas regras pode resultar em advertências ou banimentos do servidor.</li>
  
  <li><strong>Apropriação de Itens do Dono:</strong> Não é permitido roubar itens ou recursos pertencentes a outros jogadores, sem a devida permissão do dono.</li>
</ul>
<p style="display: flex; font-size: 15px;"><strong>Concordância com as Regras:</strong> A partir do momento em que você começa a jogar no servidor, você está concordando em seguir todas as seguintes regras:</p>
`;
      break;
    case 2:
      content.innerHTML = `<style>
      .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .image-container img {
        max-width: 100%;
        margin: 0 10px;
      }

      .image-container p {
        margin: 0 10px;
      }
      </style>
      <div class="image-container" style="margin: 30px;">
      <a href="https://chat.whatsapp.com/K4U6cCDS0qBFht8ZiL9WpH">
        <img src="/imgem/whatsapp.png" alt="WhatsApp">
        <p>WhatsApp</p>
      </a>
  
  
      <div class="image-container">
          <a href="https://discord.gg/rZAAt3fY">
            <img src="/imgem/discord.png" alt="Discord">
            <p>Discord</p>
          </a>
      `;
      break;
 
    case 3:
      content.innerHTML = `   <div style="display: grid; justify-content: center; ">
      <div style="margin-top: 10px;">
          <div class="strlive">
              <img src="/imgem/zaroistr.png">
              <div>
                  <p class="titlestrem">zaroi</P>
                  <p><img src="/imgem/twitchlogo.png" class="imgstrem"><a href="https://www.twitch.tv/z4roi"target="_blank">Twitch</p>
                  </h5>
                  <p><img src="/imgem/youtubelogo.png" class="imgstrem"><a>YouTube</a></p>
                  <p><img src="/imgem/tiktokloog.png" class="imgstrem"><a
                          href="https://www.tiktok.com/@miq.sad?_t=8fnYgwdKcQI&_r=1"target="_blank">tiktok</a></p>
              </div>
          </div>
      </div>
      <div style="margin-top: 10px; ">
          <div class="strlive">
              <img src="/imgem/0mcds0.png">
              <div>
                  <p class="titlestrem">0MCdS0</P>
                  <p><img src="/imgem/twitchlogo.png" class="imgstrem"><a href="https://www.twitch.tv/0mcds0?sr=a"target="_blank">Twitch</p>
                  </h5>
                  <p><img src="/imgem/youtubelogo.png" class="imgstrem"><a>YouTube</a></p>
                  <p><img src="/imgem/tiktokloog.png" class="imgstrem">tiktok</p>
              </div>
          </div>
      </div>
  </div>
`;
  
  

break;
    case 4:
      content.innerHTML =  `<div style="text-align: center;">
                
      <h2>apoierealms@gmail.com</h2>
      
      </div>`;
  }
  

}
