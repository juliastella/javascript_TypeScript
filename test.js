const PARENT_FOLDER_ID = ${_com_liferay_document_library_web_portlet_DLAdminPortlet_folderId};
const treeElement = document.querySelector(".post-text");
const images = treeElement.querySelectorAll("img");

async function getFile(anchor) {
    const href = anchor.getAttribute("href").replace("http://", "https://");
    const extension = href.split('.').pop().toLowerCase();
   
    // Verifica se a extensão é png ou jpeg
    if (extension === '.png' || extension === '.jpeg' || extension === '.jpg') {
       try {
         const file = await fetch(href);
         const fileBLOB = await file.blob();
         return fileBLOB;
       } catch (ex) {
         console.error('Erro ao baixar a imagem:', ex);
         return null; // Retorna null se houver um erro
       }
    } else {
       console.log('Arquivo não é PNG ou JPEG:', href);
       return null; // Retorna null se não for PNG ou JPEG
    }
}
   

async function postFile(file) {
    try {
       const formData = new FormData();
       formData.append("file", file, "arquivo_" + Math.random());
       const response = await fetch(
         `https://webserver-prefeiturasp-dev.lfr.cloud/o/headless-delivery/v1.0/document-folders/${PARENT_FOLDER_ID}/documents`,
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
       const data = await response.json();
       return data;
    } catch (ex) {
       console.error('Erro ao postar o arquivo:', ex);
       return { contentUrl: null }; // Garante que sempre retorne um objeto com contentUrl
    }
}
   

async function iterateFiles() {
  for (let i = 0; i < images.length; i++) {
    const file = images[i];
    console.log(`Processando arquivo ${i + 1} de ${images.length}`);

    const fileBLOB = await getFile(file);
    let fileData;

    if (typeof fileBLOB !== "string") {
      const { contentUrl } = await postFile(fileBLOB);
      fileData = contentUrl;
    } else {
      fileData = fileBLOB;
    }

    file.setAttribute("href", fileData);
  }
}

iterateFiles().then((data) => console.log(treeElement.innerHTML));