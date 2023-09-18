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
        <li><strong>Consequências:</strong> O não cumprimento destas regras pode resultar em advertências ou banimentos do servidor.</li>
      </ul>`;
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
      <div class="image-container">
  <a href="https://chat.whatsapp.com/K4U6cCDS0qBFht8ZiL9WpH">
    <img src="whatsapp.png" alt="WhatsApp">
    <p>Grupo de WhatsApp</p>
  </a>
  <img src="discord.png" alt="Discord">
  <p>Servidor no Discord</p>
</div>`;
      break;
    case 3:
      content.innerHTML = `<style>
     
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
  <li>Iniciada a construção da ponte para melhorar a locomoção no Nethe.</li>
</ul>`;
      break;
    case 4:
      content.textContent = "Sem Atualização no momento";
      break;
    case 5:
      content.innerHTML = `<div class="strlive">
<img src="zaroistr.png">

<div>
<p class="titlestrem">zaroi</P>

<p><img src="twitchlogo.png" class="imgstrem"><a href="https://www.twitch.tv/z4roi">Twitch</p></h5>
<p><img src="youtubelogo.png" class="imgstrem"><a>YouTube</a></p>
<p><img src="tiktokloog.png" class="imgstrem"><a href="https://www.tiktok.com/@miq.sad?_t=8fnYgwdKcQI&_r=1">tiktok</a></p>
</div>
</div>`;
  
  

break;
    case 6:
      content.textContent = "apoierealms@gmail.com";
  }
  

}
