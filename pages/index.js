//import { makePublicRouterInstance } from 'next/dist/client/router'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import React from 'react';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/components/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img
        src={`http://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />

      <p>
        <a
          className="BoxLink"
          href={`http://github.com/${propriedades.githubUser}`}
        >
          @{propriedades.githubUser}
        </a>
      </p>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkinXLb_2isvRIrck7DTYGPwMyvqEPMBJ6oRrd_JJHqSJQWvymGIju5NGwTDMXR6Xua1Q&usqp=CAU'
  }]);
  const githubUser = "marcosfirmino";
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "jhow98",
  ];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo!</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              const comunidadesAtualizadas = [...comunidades, 'Alura Stars'];

              const comunidade = {
                id: new Date().toISOString(),
                titulo: dadosDoForm.get('title'),
                imagem: dadosDoForm.get('image')
              }
              setComunidades(comunidadesAtualizadas)
             
            }}>
              <div>
                <input 
                placeholder="Qual vai se o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?" 
                type="text">
                </input>
              </div>
              <div>
                <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="title" 
                aria-label="Coloque uma URL para usarmos de capa">
                </input>
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
