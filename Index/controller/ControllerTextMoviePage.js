import { getserie } from "../core/CoreRequest.js";
import { catalogpopularmovie } from "../core/CoreRequest.js";
import { catalogpopulartv } from "../core/CoreRequest.js";

var datamovie = catalogpopularmovie();
var datatv = catalogpopulartv();

function enviar(params) {
    valor = document.getElementById("seachmovie").value;
    window.location = "movies.html?movies=" + valor;
  }

 

export function factorycarousel(ordem,id,data,idlink) {
    let title = data["results"][ordem]["original_title"] 

    return{
     
       img: document.querySelector(id).src =
        "https://image.tmdb.org/t/p/w500" + data["results"][ordem]["poster_path"],
       imgclicked : document.querySelector(idlink).href = 
              "movies.html?movies=" + title ,
       }
        
      
    }    


function factorylogo(ordem,data,id,idlink) {
    let idtv = data["results"][ordem]["id"];
    let infoserie = getserie(idtv);
    
    

    return{
     
      // texto : texto.innerHTML = "https://image.tmdb.org/t/p/w500" + infoserie["networks"][0]["logo_path"],
      link:  document.querySelector(idlink).href = infoserie["homepage"],
      logo :  document.querySelector(id).src =
      "https://image.tmdb.org/t/p/w200" + infoserie["networks"][0]["logo_path"],
    }    
}




 const favoritemovie1  = factorycarousel (0,"#cartaz-1" ,datamovie,"#valor1");
 const favoritemovie2  = factorycarousel (1,"#cartaz-2" ,datamovie,"#valor2");
 const favoritemovie3  = factorycarousel (2,"#cartaz-3" ,datamovie,"#valor3");
 const favoritemovie4  = factorycarousel (3,"#cartaz-4" ,datamovie,"#valor4");
 const favoritemovie5  = factorycarousel (4,"#cartaz-5" ,datamovie,"#valor5");
 const favoritemovie6  = factorycarousel (5,"#cartaz-6" ,datamovie,"#valor6");
 const favoritemovie7  = factorycarousel (6,"#cartaz-7" ,datamovie,"#valor7");
 const favoritemovie8  = factorycarousel (7,"#cartaz-8" ,datamovie,"#valor8");
 const favoritemovie9  = factorycarousel (8,"#cartaz-9" ,datamovie,"#valor9");
 const favoritemovie10 = factorycarousel (9,"#cartaz-10",datamovie,"#valor10");

 const favoritetv1  = factorycarousel (0,"#poster-1" ,datatv,"#tv1");
 const favoritetv2  = factorycarousel (1,"#poster-2" ,datatv,"#tv2");
 const favoritetv3  = factorycarousel (2,"#poster-3" ,datatv,"#tv3");
 const favoritetv4  = factorycarousel (3,"#poster-4" ,datatv,"#tv4");
 const favoritetv5  = factorycarousel (4,"#poster-5" ,datatv,"#tv5");
 const favoritetv6  = factorycarousel (5,"#poster-6" ,datatv,"#tv6");
 const favoritetv7  = factorycarousel (6,"#poster-7" ,datatv,"#tv7");
 const favoritetv8  = factorycarousel (7,"#poster-8" ,datatv,"#tv8");
 const favoritetv9  = factorycarousel (8,"#poster-9" ,datatv,"#tv9");
 const favoritetv10 = factorycarousel (9,"#poster-10",datatv,"#tv10");

 const logo1  = factorylogo (0,datatv,"#plataform-1" ,"#linkstream-1" );
 const logo2  = factorylogo (1,datatv,"#plataform-2" ,"#linkstream-2" );
 const logo3  = factorylogo (2,datatv,"#plataform-3" ,"#linkstream-3" );
 const logo4  = factorylogo (3,datatv,"#plataform-4" ,"#linkstream-4" );
 const logo5  = factorylogo (4,datatv,"#plataform-5" ,"#linkstream-5" );
 const logo6  = factorylogo (5,datatv,"#plataform-6" ,"#linkstream-6" );
 const logo7  = factorylogo (6,datatv,"#plataform-7" ,"#linkstream-7" );
 const logo8  = factorylogo (7,datatv,"#plataform-8" ,"#linkstream-8" );
 const logo9  = factorylogo (8,datatv,"#plataform-9" ,"#linkstream-9" );
 const logo10 = factorylogo (9,datatv,"#plataform-10","#linkstream-10");
//