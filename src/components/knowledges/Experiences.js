import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
          <h3>Expériences</h3>
          <div className='exp1'>
            <h4>Stage chez Philiance - Philiance Formation</h4>
            <h5>Janvier - Février 2022</h5>
            <ul>
              <li>
                Création d'un réseau social d'entreprise
              </li>
              <li>
                Elaboration d'un cahier des charges
              </li>
              <li>
                Création de maquettes à l'aide de Figma
              </li>
              <li>
              Technologie utilisé lors du stage : React Native / PHP / Javascript
              </li>

            </ul>
          </div>
          <div className='exp-2'>
            <h4>Responsable E-commerce - Super U</h4>
            <h5>2018-2021</h5>
            <ul>
              <li>
                Gestion d'équipe de 5 personnes
              </li>
              <li>
                Gestion site e-commerce
              </li>
              <li>
                Préparation commande pour les clients
              </li>
              <li>
                Gestion de stock
              </li>

            </ul>
          </div>
        </div>
    );
};

export default Experiences;