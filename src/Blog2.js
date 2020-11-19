import React, { Component } from 'react';

class Blog2 extends Component {
  render() {
    return (
    
    <main>
    <h1><center>Modular Kitchen</center></h1>
    <center><img className="blog" src={process.env.PUBLIC_URL + 'Kitchen.jpg' } alt="Homestyle"  /></center>

    <p><b>Date: JULY 16, 2014</b></p>
    
    <p> A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment. 
        A modern middle-class residential kitchen is typically equipped with a stove, a sink with hot and cold running water, a refrigerator, 
        and worktops and kitchen cabinets arranged according to a modular design. Many households have a microwave oven, a dishwasher, 
        and other electric appliances. The main functions of a kitchen are to store, prepare and cook food (and to complete related tasks such as 
        dishwashing). The room or area may also be used for dining (or small meals such as breakfast), entertaining and laundry. The design and construction of kitchens is a huge market all over the world. 
    </p> 
    <p>Commercial kitchens are found in restaurants, cafeterias, hotels, hospitals, educational and workplace facilities,
       army barracks, and similar establishments. These kitchens are generally larger and equipped with bigger and more heavy-duty equipment than a residential kitchen. 
       For example, a large restaurant may have a huge walk-in refrigerator and a large commercial dishwasher machine. In some instances commercial kitchen equipment such as 
       commercial sinks are used in household settings as it offers ease of use for food preparation and high durability.</p>
    
    </main>
    );
  }
}

export default Blog2;