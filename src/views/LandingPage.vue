<!-- Desarrollado por jose luis casanova -->
<template>
  <v-container fluid style="padding:0%;" @mousewheel="changeColorScroll()">
                <v-btn
                  color="green"
                  fab
                  dark
                  x-large
                  fixed
                  bottom
                  right
                  href="https://wa.me/573217146587?text=Hola, me gustaría obtener más información sobre algunos de sus productos y/o servicios."
                >
                  <v-icon x-large>fab fa-whatsapp</v-icon>
                </v-btn>
    <v-container id="prime" fluid>
    <!-- <v-img class="imgPrincipal" src="../../public/img/Bg@3x.png" /> -->
    <v-flex xs4 class="d-flex justify-start">
      <img src="https://caliope.co/img/vectores/logo_caliope.svg"  alt="esta imagen esta rota" width="80%" height="80px" style=" padding-top:4%; transform: scale(0.8);">
        </v-flex>
        <v-flex xs8>
          
        </v-flex>

    <v-layout class="hidden-sm-and-down" style="margin-top: 7%; padding-bottom:4%">
      <v-flex  style="z-index:1">
        <p id="live">
La vida no es perfecta pero tu piel si puede serlo.
</p>
        <p id="info">
          Contamos con los mejores aliados en procedimientos esticos y quirurgicos Te
          brindamos una experiencia de atencion completa
        </p>
        <v-flex xs12 layout justify-center>
          <v-btn id="btnRegisCenter"   @click="openViewFile">
            <p id="registCenter">
Registrarse
</p>
          </v-btn>
          <v-card>
            
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout class="hidden-md-and-up">
      <v-flex xs12 style="z-index:1">
        <p id="liveSm">
La vida no es perfecta pero tu piel si puede serlo.
</p>
        <p id="infoSm">
          Contamos con los mejores aliados en procedimientos esticos y quirurgicos Te
          brindamos una experiencia de atencion completa
        </p>
        <v-flex xs12 layout justify-center>
          <v-btn  id="btnRegisCenterSm" min-width="120px" @click="openViewFile">
            <p id="registCenterSm">
Registrarse
</p>
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
<v-dialog width="660"  v-model="show" persistent>
    <v-card width="1000"  >
       <v-card-title>
         <v-flex layout justify-end>
            <v-btn icon outlined @click="openViewFile">
              <v-icon>close</v-icon>
            </v-btn>
        </v-flex>
      </v-card-title>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzkusKvJ6fD8SUyfp_iPlrabbZ3foLHIih1IM5Fr42bCTJSA/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      <v-card-actions>
        <v-flex xs12 style="display:flex">
          <a @click="viewFile(0)" style="text-decoration: underline; margin-left:15%">Términos y Condiciones</a>
          <a @click="viewFile(1)" style="text-decoration: underline; margin-left:10%">Politica de privacidad de datos</a>
        </v-flex> 
      </v-card-actions>
    </v-card>
</v-dialog>

    <v-layout row wrap mt-5 class="hidden-md-and-down">
      <v-flex xs12 md6 layout justify-end mt-5>
        <img
          src="../../public/img/WEBP/001-email@3x.webp"
          id="imgEmail"
        >
        <v-flex xs12 md6 flex-column >
          <p id="youHaveQuestions">¿Tienes preguntas?</p>
          <p id="customerSupport"> Atenciónclientes@caliope.co </p>
        </v-flex>
      </v-flex>
      <v-flex xs12 md6 layout justify-start mt-5>
        <img
          src="../../public/img/WEBP/003-shipping@3x.webp"
          id="iconProducts"
        >
        <v-flex xs12 md6 flex-column>
          <p id="pDoor">
              Productos a la puerta de su casa
          </p>    
          <p id="sendToCol">
            Envios a todo colombia
          </p>
        </v-flex>
      </v-flex>
    </v-layout>

    
    <v-layout mt-5>
      <v-flex xs12 row wrap>
        <v-flex xs12 sm12 md6 lg6 xl6  mt-5 style="padding-left:2%" class="hidden-sm-and-down">
          <img
            src="../../public/img/WEBP/angelos-michalopoulos-t7J_yjUv8QI-unsplash@3x.webp"
            style="
            object-fit: contain;
            border-radius: 2%;"
            trasform-scale
            width="100%"
            
          />
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6  mt-5 layout justify-center class="hidden-md-and-up" >
          <img
            src="../../public/img/WEBP/angelos-michalopoulos-t7J_yjUv8QI-unsplash@3x.webp"
            style="
            object-fit: contain;
            border-radius: 2%;"
            height="85%"
            width="100%"
            
          />
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6>
          <h2 id="titles" style="padding-left:9.5%; padding-right:4%">
            Cirugía estética.
          </h2>

          <p
            id="paragraph"
            style="padding-left:9.5%; padding-right:4%"
          >
            Mejoramiento de anormalidades de origen congnito adquirido tumoral o evolutivo
            que requieren reparación o reposición de forma corporal Estas son las mas comunes
          </p>
          <v-container style="margin-top:4%; " row wrap >
            <v-flex xs12 sm4 md4>
              <v-flex xs12 layout justify-center >
                  <img
                    src="../../public/img/WEBP/003-nose@3x.webp"
                    id="noseSm"
                  >
              </v-flex>
                  <p id="rino" >
                    Rinoplastia
                  </p>
            </v-flex>

            <v-flex xs12 sm4 md4  flex-column>
              <v-flex xs12 layout justify-center>
                <img
                  src="../../public/img/WEBP/002-breast-enlargement@3x.webp"
                  id="imgMplastia"
                >
              </v-flex>
                <p id="mPlastia">
                  Mamoplastia
                </p>
              </v-flex>
            <v-flex xs12 sm4 md4>
              <v-flex xs12 layout justify-center>
              <img
                src="../../public/img/WEBP/facial@3x.webp"
                id="imgLipInyec"
              >
              </v-flex>
              <p id="lipInyec">
                Lipoinyeccion
              </p>
            </v-flex>


          </v-container>
          <v-layout mb-5 mt-5>
            <v-flex xs12 layout justify-start class="hidden-sm-and-down" style="padding-left:9.5%">
              <v-btn
                style=" width: 300px;
                            height: 56px;
                            border-radius: 2.5px;
                            box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                            background-color: #0f8bec;"
              >
                <p id="requestValuation" >Solicitar valoración</p>
              </v-btn>
            </v-flex>
            <v-flex xs12 layout justify-center class="hidden-md-and-up">
              <v-btn
                style="     width: 220px;
                            height: 46px;
                            border-radius: 2.5px;
                            box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                            background-color: #0f8bec;"
              >
                <p id="requestValuation" >Solicitar valoración</p>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-container mt-5 mb-5 layout justify-center fluid>
      <v-flex xs9 md8  style="margin-top:5%">
        <h2 id="titlesPr" > Los mejores especialistas en un solo lugar</h2>
      </v-flex>
    </v-container>
    <v-container fluid
      id="coverCard"
    >
      <v-layout style="margin-top:4%" mb-5 layout justify-center class="hidden-sm-and-down">
        <v-flex xs12 md8 >
          <p id="paragraphSpecialist">
            Te mereces un servicio de calidad Contamos profesionales certificados
            en todas las reas de procedimientos estticos Explora nuestra lista
          </p>
        </v-flex>
      </v-layout>
      <v-layout style="margin-top:-5%" mb-5 layout justify-center class="hidden-md-and-up">
        <v-flex xs10 md8 >
          <p id="paragraphSpecialist">
            Te mereces un servicio de calidad Contamos profesionales certificados
            en todas las reas de procedimientos estticos Explora nuestra lista
          </p>
        </v-flex>
      </v-layout>

      <v-container
      fluid
        layout
        justify-center
        style="margin-top:3%; margin-bottom:10%;"
        class="hidden-sm-and-down"
      >
        <v-card width="750" height="750" style="border-radius:2%">
          <v-list-item v-for="(item,index) in items" :key="index" two-line style="margin-top:5%">
            <v-list-item-avatar
              style="width:35%; height:36%; margin-right:-7%; margin-left:8%; margin-top:-4%"
            >
              <img :src="item.img"  style="width:45%; height:36%">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title style=" margin-top:1%; padding-top:2%">
                <h2 id="listItemName">
{{ item.name }}
</h2>
              </v-list-item-title>
              <v-list-item-subtitle>
                <h3 id="listItemTitle">
                 {{ item.title }}
                </h3>
              </v-list-item-subtitle>
              <p id="listItemDescription">
{{ item.description }}
</p>
              <div style="display:flex">
                <v-icon
                  v-for="(star, index) in stars"
                  :key="index"
                  style="justify-content: left !important; color:yellow; padding-top:7%"
                >
                  {{ star.icon }}
                  </v-icon>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
</v-container>
<!-- card movil -->
    <v-container
      fluid
      layout
      justify-center
      style="margin-top:3%; margin-bottom:10%; "
      class="hidden-md-and-up"
    >
      <v-card width="1000" height="1300" style="margin-left:2%; overflow: auto;  ">
        <v-list-item v-for="(item,index) in items" :key="index" two-line style="display: block; text-align: center;">
          <v-list-item-avatar style="width:30%; height:36%;">
            <img :src="item.img"  style="width:100%; height:36%">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="height: 60px; margin-top:1%; margin-bottom:-5%;">
              <h2
                style=" 
                                    font-family: Nunito;
                                    font-size: 20px;
                                    font-weight: bold;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.37;
                                    letter-spacing: normal;
                                    text-align: center;
                                    color: #0f8bec;"
              >
{{ item.name }}
</h2>
            </v-list-item-title>
            <v-list-item-subtitle>
              <h3
                style="
                                height:28px;
                                font-family: Nunito;
                                font-size: 16px;
                                font-weight: normal;
                                font-stretch: normal;
                                font-style: normal;
                                line-height: 1.35;
                                letter-spacing: normal;
                                text-align: center;
                                color: #0f8bec;"
              >
{{ item.title }}
</h3>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
             <v-flex >
                <v-icon
                  v-for="(star, index) in stars"
                  :key="index"
                  style="text-align: center !important; color:#f1ea35; "
                >
{{ star.icon }}
</v-icon>
              </v-flex>
              <v-textarea
              :value="item.description"
              solo
              height="150px"
              flat
                style=" 
                      padding-left:9%;      
                      padding-right:6%;      
                      opacity: 0.6;
                      font-family: Nunito;
                      font-size: 15px;
                      font-weight: normal;
                      font-stretch: normal;
                      font-style: normal;
                      line-height: 1.33;
                      letter-spacing: 0.07px;
                      text-align: justify;
                      color: #000000;
                      "
              >

</v-textarea>

            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
    <!-- card movil -->
      <v-flex layout justify-center style="margin-top:-6%">
        <v-btn
        id="btnListSeeComplete">
          <p id="textBtnSeeListComplete">Ver lista completa</p>
        </v-btn>
      </v-flex>
    </v-container>


    
    <v-container row wrap style="margin-top:5%; margin-bottom:4%; padding:0" fluid>
    <v-flex xs12 md6 lg6 xl6 layout justify-center class="hidden-md-and-up">
        <v-img
          src="../../public/img/WEBP/karelys-ruiz-PqyzuzFiQfY-unsplash@3x.webp"
          style="
            object-fit: contain;
            border-radius: 4px;"
          min-width="50%"
          min-height="50%"
          max-height="90%"
          max-width="80%"
        />
      </v-flex>
      <v-flex xs12 md6 lg6 xl6 style="display:block;  padding-left:9.5%; padding-right:4%">
        <h2 id="titles">
Procedimientos esteticos especializados
</h2>
        <p id="paragraphSurgery">
La ciruga y los procedimientos esticos le ayudan a restaurar y realzar su apariencia
</p>
        <p id="paragrapProcedures">
- Inyecciones de relleno
</p>
        <p id="paragrapProcedures">
- Inyecciones de Botox
</p>
        <p id="paragrapProcedures">
- Eliminacin de vello con laser
</p>
        <v-flex xs12  class="hidden-md-and-up" layout justify-center>
                <v-btn
                  width="220"
                  height="46"
                  id="btnSeeMoreProcedures"
                >
                      <p id="paragraphBtnSeeMoreProcedure">
                        Ver mas procedimientos
                      </p>
                </v-btn>
        </v-flex>
        <v-flex xs12  class="hidden-sm-and-down">
                <v-btn
                  width="280"
                  height="60"
                  id="btnSeeMoreProcedures"
                >
                      <p id="paragraphBtnSeeMoreProcedure">
                        Ver mas procedimientos
                      </p>
                </v-btn>
        </v-flex>

      </v-flex>
      <v-flex xs12 md6 lg6 xl6 layout justify-center class="hidden-sm-and-down">
        <v-img
          src="../../public/img/WEBP/karelys-ruiz-PqyzuzFiQfY-unsplash@3x.webp"
          style="
            object-fit: contain;
            border-radius: 4px;"
          min-width="50%"
          min-height="50%"
          max-height="90%"
          max-width="80%"
        />
      </v-flex>
    </v-container>

    
    <v-container row wrap style="margin-top:5%; margin-bottom:4%" fluid>
      <v-flex xs12 md6 lg6 xl6 layout justify-center>
        <v-img
          src="../../public/img/WEBP/physiotherapy-567021@3x.webp"
          style="
            object-fit: contain;
            border-radius: 4px;"
          min-width="50%"
          min-height="50%"
          max-height="90%"
          max-width="80%"
        />
      </v-flex>
      <v-flex xs11 md6 lg6 xl6 style="display:block; padding-right:2%; padding-left:5%">
        <h2 id="titles">
              Procedimientos esticos Wellness
        </h2>
        <p
          id="wellnessParagraph"
        >
          Con Wellness alcance un equilibrio saludable entre los niveles mental fisico y
          emocional obteniendo como resultado un estado de bienestar general
        </p>
        <v-flex layout class="hidden-sm-and-down">
          <v-btn
          width="280"
          height="60"
          id="btnSeeMoreProcedures"
        >
          <p
            style="
                    margin:auto;
                    font-family: Nunito;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;"
          >
Ver mas procedimientos
</p>
        </v-btn>
        </v-flex>
        <v-flex layout justify-center class="hidden-md-and-up">
          <v-btn
          width="220"
          height="46"
          id="btnSeeMoreProcedures"
        >
          <p
            style="
                    margin:auto;
                    font-family: Nunito;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;"
          >
Ver mas procedimientos
</p>
        </v-btn>
        </v-flex>
      </v-flex>
    </v-container>
<v-flex xs12 md6 lg6 xl6 layout justify-center class="hidden-md-and-up">
        <v-img
          src="../../public/img/WEBP/face-cream-3875810@3x.webp"
          style="
            object-fit: contain;
            border-radius: 4px;"
          min-width="50%"
          min-height="50%"
          max-height="90%"
          max-width="80%"
        />
      </v-flex>
    
    <v-container row wrap style="margin-top:5%; margin-bottom:4%" fluid>
      <v-flex xs12 md6 lg6 xl6 style="display:block;  padding-left:7%; padding-right:4%">
        <h2
          id="titles"
        >
Productos para el cuidado de la piel
</h2>
        <p
         id="paragrahProducsForskin"
        >
Los mejores productos de acuerdo con su tipo de piel o necesidad especfica para proteger la piel y rostro de las influencias externas nocivas tales como el sol los climas calientes fros y contaminacin del aire
</p>

<v-flex xs12 class="hidden-sm-and-down">
        <v-btn
          width="280"
          height="60"
          style="
                    margin-top:5%;
                    margin-bottom:4%;   
                    border-radius: 6px;
                    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                    background-color: #0f8bec;"
        >
          <p
            style="
                    margin:auto;
                    font-family: Nunito;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;"
          >
Ver mas procedimientos
</p>
        </v-btn>
</v-flex>
<v-flex class="hidden-md-and-up" layout justify-center>
        <v-btn
          width="220"
          height="46"
          style="
                    margin-top:5%;
                    margin-bottom:4%;   
                    border-radius: 6px;
                    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                    background-color: #0f8bec;"
        >
          <p
            style="
                    margin:auto;
                    font-family: Nunito;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;"
          >
Ver mas procedimientos
</p>
        </v-btn>
        </v-flex>
      </v-flex>
      <v-flex xs12 md6 lg6 xl6 layout justify-center class="hidden-sm-and-down">
        <v-img
          src="../../public/img/WEBP/face-cream-3875810@3x.webp"
          style="
            object-fit: contain;
            border-radius: 4px;"
          min-width="50%"
          min-height="50%"
          max-height="90%"
          max-width="80%"
        />
      </v-flex>
    </v-container>




     <v-container fluid row wrap>
        <v-flex xs3 layout justify-center>
            <img src="../../public/img/WEBP/avon-png-1.webp" style="width:60%; height:100%; margin-top:-8%">
        </v-flex>
        <v-flex xs3 layout justify-center>
            <img src="../../public/img/WEBP/6ffj0kpx@3x.webp" style="width:50%; height:80%">
        </v-flex>
        <v-flex xs3 layout justify-center>
            <img src="../../public/img/WEBP/upmue53s@3x.webp" style="width:50%; height:70%; margin-top:-1%">
        </v-flex>
        <v-flex xs3 layout justify-center>
            <img src="../../public/img/WEBP/fayimsai@3x.webp" style="width:50%; height:90%; margin-top:-6%">
        </v-flex>
    </v-container>

    
    <v-layout style="margin-top: 5%; background-color: #0f8bec;" row wrap class="hidden-sm-and-down">
<img src="../../public/img/WEBP/woman-in-floral-long-sleeved-dress-1319911@3x.webp" style="width: 14%;  height: 10%; margin-top: -5%; padding-left:2%" alt="">

    <v-flex xs9 layout justify-center style="padding-top:5%" flex-column>
        <h2 style="font-family: Nunito;
            font-size: 50px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;"
>
Testimonios
</h2>
            <p style="
            margin-top:3%;
            padding-left:15%;
            padding-right:15%;
                font-family: Nunito;
                font-size: 28px;
                font-weight: normal;
                font-stretch: normal;
                font-style: italic;
                line-height: 1.37;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;"
> 
            Soy clienta habitual desde que abrieron el centro y cada vez estoy ms contenta 
            Soy clienta habitual desde que abrieron el centro y cada vez estoy ms contenta 
            con ellas por el trato que me dan y la calidad y precio que tienen 
            </p>
            <p style="font-family: Nunito;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                font-style: italic;
                line-height: 1.37;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                font-weight: 900;
                font-style: normal;"
>
-Raquel Gonzles
</p>  
                </v-flex>
</v-layout>

    <v-container style="margin-top: 5%; background-color: #0f8bec;" row wrap class="hidden-md-and-up" fluid>

    <v-flex xs12 layout justify-center style="padding-top:5%" flex-column>
        <h2 style="font-family: Nunito;
            font-size: 28px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;"
>
Testimonios
</h2>
            <p style="
            margin-top:3%;
            padding-left:15%;
            padding-right:15%;
                font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: italic;
                line-height: 1.37;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;"
> 
            Soy clienta habitual desde que abrieron el centro y cada vez estoy ms contenta 
            Soy clienta habitual desde que abrieron el centro y cada vez estoy ms contenta 
            con ellas por el trato que me dan y la calidad y precio que tienen 
            </p>
            <p style="font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: italic;
                line-height: 1.37;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                font-weight: 900;
                font-style: normal;"
>
-Raquel Gonzles
</p>  
                </v-flex>
</v-container>



    <v-layout style="background-color: black; margin-bottom:2%; padding-top:5%" class="hidden-sm-and-down">
        <v-flex xs5 layout justify-center flex-column style="padding-left:8%;">
<h2 style="font-family: Roboto;
                        font-size: 25px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.2;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffffff;"
>
¿Quieres recibir noticias?
</h2>
                        v-text
                        <v-flex xs12 style="display:flex;">
                            <div style="width:300px">
                                <v-text-field
                                    background-color="white"
                                    label="Correo electronico"
                                    outlined
                                />
                            </div>
                            <v-btn style=" 
                                    width:28%;
                                    border-radius:4px;
                                    margin-left:2%;
                                    height:55px;
                                    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                                    background-color: #0f8bec;"
>
                                    <p style="
                                    margin:auto;
                                    font-family: Nunito;
                                    font-size: 15px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.38;
                                    letter-spacing: normal;
                                    text-align: center;
                                    color: #ffffff;"
>
Registrarse
</p>
</v-btn>
                            </v-flex>
                        </v-flex>
        <v-flex xs2 flex-column>
            <p align="center" style="color:white">
Preguntas frecuentes
</p>
            <p align="center" style="color:white">
Términos y condiciones
</p>
            <p align="center" style="color:white">
Contacta con nosotros
</p>
        </v-flex>
       
          <v-flex xs5 layout justify-center >
            <v-btn icon dark x-large>
              <v-icon class="fab fa-facebook-f" />
            </v-btn>
            <v-btn icon dark x-large style="margin-left:4%; margin-right:4%">
              <v-icon class="fab fa-instagram" />
            </v-btn>
            <v-btn icon dark x-large>
              <v-icon class="fab fa-twitter" />
            </v-btn>
          </v-flex>

    </v-layout>

    <v-container fluid  style="background-color: black; margin-bottom:2%; padding-top:5%" class="hidden-md-and-up " row wrap>
        <v-flex xs12  flex-column  >
                  <h2 style="font-family: Roboto;
                                          font-size: 20px;
                                          font-weight: normal;
                                          font-stretch: normal;
                                          font-style: normal;
                                          line-height: 1.2;
                                          letter-spacing: normal;
                                          text-align: left;
                                          color: #ffffff;"
                  >
                  ¿Quieres recibir noticias?
                  </h2>
                        v-text
                        <v-flex xs12 style="display:flex;">
                            <div style="width:230px">
                                <v-text-field
                                    background-color="white"
                                    label="Correo electronico"
                                    outlined
                                />
                            </div>
                            <v-btn style=" 
                                    width:38%;
                                    border-radius:4px;
                                    margin-left:2%;
                                    height:55px;
                                    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                                    background-color: #0f8bec;"
>
                                    <p style="
                                    margin:auto;
                                    font-family: Nunito;
                                    font-size: 15px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    font-style: normal;
                                    line-height: 1.38;
                                    letter-spacing: normal;
                                    text-align: center;
                                    color: #ffffff;"
>
Registrarse
</p>
</v-btn>
                            </v-flex>
                        </v-flex>
        <v-flex xs12 flex-column>
            <p align="center" style="color:white">
Preguntas frecuentes
</p>
            <p align="center" style="color:white">
Términos y condiciones
</p>
            <p align="center" style="color:white">
Contacta con nosotros
</p>
        </v-flex>
       
          <v-flex xs12 layout justify-center >
            <v-btn icon dark x-large>
              <v-icon class="fab fa-facebook-f" />
            </v-btn>
            <v-btn icon dark x-large style="margin-left:4%; margin-right:4%">
              <v-icon class="fab fa-instagram" />
            </v-btn>
            <v-btn icon dark x-large>
              <v-icon class="fab fa-twitter" />
            </v-btn>
          </v-flex>
        <v-flex xs12 layout justify-center mt-5>
          <p style="font-family: Nunito;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.35;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;">Copyright <span style="font-size:20px;">©</span>2020 Todos los derechos reservados <v-icon dark>favorite</v-icon> nammu.io</p>
        </v-flex>
    </v-container>

    <v-layout layout justify-center style="background-color:black; margin-top:-3%; padding-top:4%;padding-bottom:5%" class="hidden-sm-and-down">
        <p style="font-family: Nunito;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.35;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;">Copyright <span style="font-size:140%;">©</span>2020 Todos los derechos reservados <v-icon dark>favorite</v-icon> nammu.io</p>       
      
    </v-layout>       
  </v-container>
</template>
<script>
import { mapMutations,mapState } from "vuex";

export default {
  data: () => ({
    alg:"end",
    son:5,
    stars: [
      {
        icon: "fa-star"
      },
      {
        icon: "fa-star"
      },
      {
        icon: "fa-star"
      },
      {
        icon: "fa-star"
      },
      {
        icon: "fa-star"
      }
    ],
    items: [
      {
        name: "Santiago Betancurth",
        title: "Especialista en Ciruga Estica",
        img: 'img/WEBP/NoPath - copia (4)@3x.webp',
        description:
          "Destacado especialista en Medicina Estica con mas de 10 años de experiencia Es egresado como Medico de la Universidad de Cartagena"
      },
      {
        name: "Cristina Martnez",
        title: "Especialista en Liposupción",
        img:'img/WEBP/humberto-chavez-FVh_yqLR9eA-unsplash@3x.webp',
        description:
          "Destacado especialista en Medicina Estica con mas de 10 años de experiencia Es egresado como Medico de la Universidad de Cartagena"
      },
      {
        name: "Mateo Fuentes",
        title: "Especialista en Ciruga de Naríz",
        img:'img/WEBP/doctor-sitting-in-front-of-his-desk-2182979@3x.webp',
        description:
          "Destacado especialista en Medicina Estica con mas de 10 años de experiencia Es egresado como Medico de la Universidad de Cartagena"
      }
    ],
    miniVariant: false,
    activeBtn: 0,
    bottomNav: "recent"
  }),
  mounted() {
    this.hiddenTolbar();
    this.items.forEach(element => {
      return element.img;
    });
    this.changeColorScroll();
  },
  computed: {
    ...mapState(["show"])
  },
  methods: {

    viewFile(v) {
        if(v===0){
          let object = `<object data="files/terminosycondiciones.pdf" type="application/pdf" style="width: 100%;height: 100%;"></object>`;
          let html = `<html><head><title>términos y condiciones</title></head><body style="margin: 0;background: #3a3a3a;"> <div style="width: 100%;height: 100%;"> ${object} </div></body></html>`;
          var newWin = window.open("", "_blank");
      newWin.document.write(html);
        }else{
          let object = `<object data="files/politicadetratamientodelainformacion.pdf" type="application/pdf" style="width: 100%;height: 100%;"></object>`;
          let html = `<html><head><title>politica de tratamiento de la informacion</title></head><body style="margin: 0;background: #3a3a3a;"> <div style="width: 100%;height: 100%;"> ${object} </div></body></html>`;
        var newWin = window.open("", "_blank");
      newWin.document.write(html);
        }
    },
    
    sendMessageWhatsApp(){
      
      $.ajax({
        beforeSend : function ( jqXHR , settings ) { 
        jqXHR . setRequestHeader ( 'Content-Type' , 'application/json');}, 
        headers:{
            "Content-Type": "application/json",            
        },
        type: "post",
        url: "https://wa.me/573154037375",
        data: {
          texto:"Hola, quisiera informacion de algunos de sus productos y/o servicios"
        },
        dataType: "json",
      }).then(response=>{
        console.log("envio ");
      }).catch(response=>{
        console.log("algo salio mal", response);
      });
    },
    changeColorScroll(){
      $(window).scroll(function(event) {
         var scrollTop = $(window).scrollTop();
         if(scrollTop>4){
              $("#nav").css({'background-color':'white','opacity':'2','z-index':'2'}); //*Transparente
              $(".btnNav").css('color','#0f8bec');
              $("#btnSession").css({'color':'#0f8bec','border':'1px solid', 'border-color': '#0f8bec'});
              $("#initS").css('color','#0f8bec');
              
         }else if(scrollTop<4){
              $("#nav").css({'background-color':'transparent','opacity':'2','color':'#0f8bec'}); //*blanco
              $("#btnSession").css({'color':'#0f8bec','border':'none', 'border-color': 'none'});
              $(".btnNav").css('color','white');
              $("#initS").css('color','black');
              
         }
      });
    },
    ...mapMutations(["hiddenTolbar","openViewFile"]),
   
    changeStyle(item,son){         
          document.getElementById(item).style.cssText = 'background-color:#364573;color:white !important';
          document.getElementById(son).style.color = 'white';
          switch (item) {
            case 0:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 1:
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 2:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 3:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(4).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(9).style.color = 'gray';
            break;
            case 4:
            document.getElementById(1).style.cssText = 'background-color: white; color: gray';
            document.getElementById(2).style.cssText = 'background-color: white; color: gray';
            document.getElementById(3).style.cssText = 'background-color: white; color: gray';
            document.getElementById(0).style.cssText = 'background-color: white; color: gray';
            document.getElementById(5).style.color = 'gray';
            document.getElementById(6).style.color = 'gray';
            document.getElementById(7).style.color = 'gray';
            document.getElementById(8).style.color = 'gray';
              break;
          
            default:
              break;
          }

       }
  }
};
</script>
<style scoped>
#prime{
  background-image:  url('../../public/img/WEBP/Bg@3x.webp');
  background-size: auto; 
  background-position: center;
  width: 100%;
  height: 100%;
  padding:0%
}
#coverCard{
  background-image:  url('../../public/img/WEBP/doctor-1228627.webp'); 
  background-size: auto; 
  background-position: center;
}
#paragrapProcedures{
                margin-top:1%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}
#imgLipInyec{
      transform: scale(0.8);
      object-fit: contain;
      height: 127.2px;
      max-width:110px;
      max-height:150.2px;
}
#imgMplastia{
     transform: scale(0.8);
      object-fit: contain;
      height: 127.2px;
      max-width:110px;
      max-height:150.2px;
}
#noseSm{
    transform: scale(0.8);
      object-fit: contain;
      max-width:110px;
      max-height:150.2px;
}
#wellnessParagraph{
                margin-top:5%;
                opacity: 0.7;
                font-family: Nunito;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}
#wellnessProcedures{
                font-family: Nunito;
                font-size: 50px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#producsForskin{
                font-family: Nunito;
                font-size: 50px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#paragrahProducsForskin{
                margin-top:5%;
                opacity: 0.7;
                font-family: Nunito;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}

#paragraphBtnSeeMoreProcedure{
                    margin:auto;
                    font-family: Nunito;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.36;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;
}
#btnSeeMoreProcedures{
                margin-top:5%;
                margin-bottom:4%;   
                border-radius: 6px;
                box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                background-color: #0f8bec;
}
#paragraphSurgery{
                margin-top:5%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}
#steticProcedures{
                font-family: Nunito;
                font-size: 50px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#textBtnSeeListComplete{
            margin:auto;
            font-family: Nunito;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
}
#btnListSeeComplete{
            width:280;
            height:60;
            margin-bottom:4%;   
            border-radius: 6px;
            box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
            background-color: #0f8bec;
}
#listItemDescription{
            padding-right:20%;
            width: 10%;
            height: 30.5px;
            opacity: 0.6;
            font-family: Nunito;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: 0.07px;
            text-align: justify;
            color: #000000;
}
#listItemTitle{
            width: 137.5px;
            height:28px;
            margin-top:-5%;
            font-family: Nunito;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.35;
            letter-spacing: normal;
            text-align: left;
            color: #0f8bec;
}
#listItemName{
            font-family: Nunito;
            font-size: 30px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.37;
            letter-spacing: normal;
            text-align: left;
            color: #0f8bec;
}
#paragraphSpecialist{
            font-family: Nunito;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: 0.3px;
            text-align: center;
            color: #acacac;
}
#specialist{
            font-family: Nunito;
            font-size: 47px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.04;
            letter-spacing: normal;
            text-align: center;
            color: #0f8bec;
}
#requestValuation{
            margin:auto;
            text-transform:capitalize;
            font-family: Nunito;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
}
#lipInyec{
            margin-top:2.5%;
            font-family: Nunito;
            font-size: 25px;
            transform: scale(0.8);
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: 0.44px;
            text-align: center;
            color: #0f8bec;
}
#mPlastia{
            margin-top:2.5%;
            font-family: Nunito;
            font-size: 25px;
            transform: scale(0.8);
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: 0.44px;
            text-align: center;
            color: #0f8bec;
}
#rino1{             
            margin-top:2.5%;
            font-family: Nunito;
            font-size: 30px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: 0.44px;
            text-align: center;
            color: #0f8bec;
}
#rino{      
            margin-top:2.5%;
            font-family: Nunito;
            font-size: 25px;
            transform: scale(0.8);
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: 0.44px;
            text-align: center;
            color: #0f8bec;
}
#paragraph{
            margin-left:1%;
            opacity: 0.5;
            font-family: Nunito;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: 0.3px;
            text-align: left;
            color: #000000;
}
#titles{
            font-family: Nunito;
            font-size: 40px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: left;
            color: #0f8bec;
}
#titlesPr{
            font-family: Nunito;
            font-size: 40px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: center;
            color: #0f8bec;
}
#sendToCol{
            margin-top:-20px;
            font-family: Nunito;
            font-size: 25px;
            width: 130%;
            transform: scale(0.8);
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.37;
            letter-spacing: normal;
            text-align: left;
            color: #0f8bec;
}
#pDoor{
        margin-top:1%;
        font-family: Nunito;
        font-size: 25px;
        width: 130%;
        transform: scale(0.8);
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.37;
        letter-spacing: normal;
        text-align: left;
        color: #0f8bec;
}
#iconProducts{
          margin-right:-5%;
          transform: scale(0.8);
          height:90px;
          width:90px
}

#customerSupport{
        margin-left: -5%;
        margin-top:-20px;
        font-family: Nunito;
        font-size: 25px;
        transform: scale(0.8);
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.37;
        letter-spacing: normal;
        text-align: left;
        color: #0f8bec;
}

#imgEmail{
          
          transform: scale(0.8);
          height:80px;
          width:80px
}
#youHaveQuestions{
        margin-left: -5%;
        margin-top:1%;
        font-family: Nunito;
        font-size: 25px;
        transform: scale(0.8);
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.37;
        letter-spacing: normal;
        color: #0f8bec;
}
.btnNav{
  margin-left: 4%;
  color: white;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
}
#specialistText{
  margin-left: 5%;
  color: white;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
}
.imgPrincipal{
    z-index:1; 
    opacity:0.8;
}
#nav {
  width: 100%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 5.4%;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: transparent;
  font-family: "Nunito", sans-serif;
  color: white;
  box-shadow: none;
}
.buttons {
  margin-top: 10px;
  padding-left: 1% !important;
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  min-width: 300px;
  box-shadow: 0 0 0 0 !important;
}
.buttons1 {
  margin-top: 10px;
  padding-left: 4% !important;
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  min-width: 300px;
  box-shadow: 0 0 0 0 !important;
}
#btnSession {
  margin-top: 0.5%;
  margin-left: 6%;
  margin-right: -1%;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}
#btnRegis {
  margin-left: 2%;
  margin-top: 0.5%;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #0f8bec;
}
#initS {
  margin: auto;
  margin-top:10%;
  font-family: Nunito;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}
#regist {
  margin: auto;
  font-family: Nunito;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
#live {
  margin:auto;
  margin-top: -4%;
  width: 600px;
  height: 64.5px;
  font-family: Nunito;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#info {
  margin-top: 85px;
  margin-left: auto;
  margin-right: auto;
  width: 750px;
  height: 50px;
  font-family: Nunito;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#btnRegisCenter {
  margin-top: 75px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 68px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #0f8bec;
}
#registCenter {
  margin: auto;
  font-family: Nunito;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
#liveSm {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 64.5px;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#infoSm {
  margin-top: -8%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 20%;
  font-family: Nunito;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#btnRegisCenterSm {
  margin-top: 8%;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 68px;
  border-radius: 5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #0f8bec;
}
#registCenterSm {
  margin: auto;
  font-family: Nunito;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
@media (max-width: 1904px) {
  #btnRegisCenterSm {
    margin-top: 8%;
    margin-bottom: 4%;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 38px;
    border-radius: 5px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #0f8bec;
  }
  #registCenterSm {
  margin: auto;
  font-family: Nunito;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.imgPrincipal{
    z-index:1; 
    opacity:0.8;
    height: 550px;
}
#liveSm {
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  height: 64.5px;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#infoSm {
  margin-top: -5%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 20%;
  font-family: Nunito;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
}

@media (max-width: 959px) {
  #btnRegisCenterSm {
    margin-top: 4%;
    margin-bottom: 4%;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 38px;
    border-radius: 5px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #0f8bec;
  }
  #registCenterSm {
  margin: auto;
  font-family: Nunito;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.imgPrincipal{
    z-index:1; 
    opacity:0.8;
    height: 250px;
}
#liveSm {
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  height: 64.5px;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#infoSm {
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 20%;
  font-family: Nunito;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
}
@media(max-width: 600px){
  #btnRegisCenterSm {
    margin-top:10%;
    margin-bottom: 8%;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 38px;
    border-radius: 5px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #0f8bec;
  }
  #registCenterSm {
  margin: auto;
  font-family: Nunito;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.imgPrincipal{
    z-index:1; 
    opacity:0.8;
    height: 250px;
}
#liveSm {
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 64.5px;
  font-family: Nunito;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
  text-align: center;
  color: white;
}
#infoSm {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 20%;
  font-family: Nunito;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: center;
  color: white;
}

#steticParagraph{
            margin-top:2%;
            padding-left: 7%;
            padding-right: 5%;
            margin-right:3%;
            opacity: 0.5;
            font-family: Nunito;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: 0.3px;
            text-align: justify;
            color: #000000;
}

#requestValuation{
            margin:auto;
            text-transform:capitalize;
            font-family: Nunito;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
}
#specialist{
            font-family: Nunito;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.04;
            letter-spacing: normal;
            text-align: center;
            color: #0f8bec;
}
#paragraphSpecialist{
            font-family: Nunito;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.27;
            letter-spacing: 0.3px;
            text-align: center;
            color: #acacac;
}
#btnListSeeComplete{
            width: 220px;
            height: 46px;
            margin-top:8%;   
            margin-bottom:10%;   
            border-radius: 6px;
            box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
            background-color: #0f8bec;
}
#steticProcedures{
                font-family: Nunito;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#paragraphSurgery{
                margin-top:5%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}
#paragrapProcedures{
                margin-top:1%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: left;
                color: #000000;
}
#btnSeeMoreProcedures{
                width: 220px;
                height: 46px;
                margin-top:8%;   
                margin-bottom:10%;   
                border-radius: 6px;
                box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                background-color: #0f8bec;
                
}
#wellnessProcedures{
                margin-top: 2%;
                padding-left: 5%;
                font-family: Nunito;
                font-size: 20px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#wellnessParagraph{
                padding-left: 5%;
                padding-right: 5%;
                margin-top:2%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: justify;
                color: #000000;
}
#producsForskin{
                margin-top: 2%;
                margin-right: 3%;
                padding-right: -5%;
                padding-left: 5%;
                font-family: Nunito;
                font-size: 28px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.04;
                letter-spacing: normal;
                text-align: left;
                color: #0f8bec;
}
#paragrahProducsForskin{
                padding-left: 5%;
                padding-right: 5%;
                margin-top:2%;
                opacity: 0.6;
                font-family: Nunito;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.37;
                letter-spacing: 0.27px;
                text-align: justify;
                color: #000000;
}
#btnSeeMoreProcedures{
                width: 220px;
                height: 46px;
                margin-top:8%;   
                margin-bottom:10%;   
                border-radius: 6px;
                box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
                background-color: #0f8bec;              
}

}
</style>