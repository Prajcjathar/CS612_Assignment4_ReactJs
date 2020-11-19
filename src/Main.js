import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Home Sweet Home</Link>
     <p className="title">Date: JULY 23, 2018</p>
     <img src={process.env.PUBLIC_URL + '/https://www.thetrendspotter.net/wp-content/uploads/2020/04/DIY-Home-De%CC%81cor-Ideas.jpg' } alt="Homestyle"  />
     <p> Modernist architects chose to create homes that showed a distinct lack of ornament and flair, in contrast to what was seen in the popular home designs of the time. They designed homes that featured a strong horizontal composition with large open floor plans, intentional asymmetry,
         and large expanses of glass windows or glass walls. The focus here was to create a simplified home with an emphasis on function – removing unnecessary details and frills. As a result, many of these homes were designed to blur the boundaries between the indoors and outdoors. 
         They used the surrounding area to enhance the features of the home, using the lines of the roof or cantilevers to continue the lines of the landscape around the home. As modernist architect Ludwig Mies van der Rohe stated: “Nature, too, shall live its own life. 
         We must be aware not to disrupt it with the color of our houses and interior fittings. Yet we should attempt to bring nature, houses and human beings together into a higher unity.”
         Mid-century modern style is an offshoot of traditional modernism using many of the same key features that modernist architects developed, but it’s typically reserved for interior design styles. Some key qualities associated with this style are square homes
         with flat roofs, a monochromatic color palette, and low-key furnishings with a simple and distinct attention to minimalism while avoiding a stark, cold feeling.
    </p>
     </li>
     <li>
     <Link className="title" exact to="/Blog2">Modular Kitchen</Link>
     <p className="title">Date: JULY 16, 2014</p>
     <img src={process.env.PUBLIC_URL + '/kitchen.jpg' } alt="Homestyle"  />
     <p>A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. 
        A modern middle-class residential kitchen is typically equipped with a stove, a sink with hot and cold running water, a refrigerator, 
        and worktops and kitchen cabinets arranged according to a modular design. Many households have a microwave oven, a dishwasher, 
        and other electric appliances. The main functions of a kitchen are to store, prepare and cook food (and to complete related tasks such as 
        dishwashing). The room or area may also be used for dining (or small meals such as breakfast), entertaining and laundry. The design and construction of kitchens is a huge market all over the world.
     </p>
     </li>
     <li>
     <Link className="title" exact to="/Blog3">Terrace</Link>
     <p className="title">Date: MAY 27, 2017</p>
     <img src={process.env.PUBLIC_URL + '/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjNrQR4sU6IXld-ncfb-9PDqDDb_9veXECw&usqp=CAU' } alt="Homestyle"  />
     <p>Terraces are used primarily for leisure activity such as sitting, strolling, or resting.The term often applies to a raised area in front of a monumental
       building or structure, which is usually reached by a grand staircase and surrounded by a balustrade.[2] A terrace may be supported by an embankment or solid 
       foundation, either natural or man-made. Terraces may also be platforms, supported by columns but without the space below filled in,[1] but terraces are always
       open to the sky and may or may not be paved.
    </p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;