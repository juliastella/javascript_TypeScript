const PARENT_FOLDER_ID = ${_com_liferay_document_library_web_portlet_DLAdminPortlet_folderId};
const treeElement = document.querySelector(".post-text");
const images = treeElement.querySelectorAll("img"); // Seleciona todos os elementos <img> dentro de .post-text

async function getImage(imgElement) {
 try {
    const src = imgElement.getAttribute("src").replace("http://", "https://");
    const response = await fetch(src);
    const fileBLOB = await response.blob();
    return fileBLOB;
 } catch (ex) {
    console.error('Erro ao baixar a imagem:', ex);
    return null; // Retorna null se houver um erro
 }
}

async function postImage(file) {
    try {
       const formData = new FormData();
       formData.append("file", file, "imagem_" + Math.random());
       const response = await fetch(
         `https://webserver-prefeiturasp-prd.lfr.cloud/o/headless-delivery/v1.0/document-folders/${PARENT_FOLDER_ID}/documents`,
         {
           headers: {
             Authorization:
               "Basic " +
               btoa("test@prefeitura.sp.gov.br:liferay@prefeituraadmin"),
           },
           method: "POST",
           body: formData,

         }
       );
       // Como o modo 'no-cors' resulta em uma resposta opaca, você não pode acessar o conteúdo da resposta ou o status.
       // Portanto, você pode precisar ajustar a lógica subsequente para lidar com isso.
       return null; // Retorna null como um valor padrão, pois a resposta não pode ser acessada
    } catch (ex) {
       console.error('Erro ao postar a imagem:', ex);
       return null; // Garante que sempre retorne um objeto com contentUrl
    }
}
   


function refreshImage(imgElement) {
    // Adiciona o carimbo de data/hora atual como parâmetro de consulta para forçar o recarregamento da imagem
    const currentSrc = imgElement.getAttribute('src');
    const newSrc = currentSrc.includes('?') ? currentSrc.replace(/\?.*$/, `?${Date.now()}`) : `${currentSrc}?${Date.now()}`;
    imgElement.setAttribute('src', newSrc);
   }
   

async function iterateImages() {
 for (let i = 0; i < images.length; i++) {
    const imgElement = images[i];
    console.log(`Processando imagem ${i + 1} de ${images.length}`);

    const fileBLOB = await getImage(imgElement);
    let fileData;

    if (fileBLOB) {
      const postResult = await postImage(fileBLOB);
      if (postResult && postResult.contentUrl) {
        fileData = postResult.contentUrl;
      } else {
        console.error('Erro ao obter contentUrl:', postResult);
        fileData = null; // Ou qualquer valor padrão que faça sentido no seu contexto
      }
    } else {
      fileData = null; // Ou qualquer valor padrão que faça sentido no seu contexto
    }

    // Aqui você pode decidir como atualizar o elemento imgElement com o novo fileData, se necessário
    images.forEach(imgElement => {
        refreshImage(imgElement);
       });
}
}

iterateImages().then(() => console.log("Processamento de imagens concluído."));
