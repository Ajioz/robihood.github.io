import React  from 'react';
import Card   from './Card';


const Cardlist = ({getThem}) => 
{
   return(
     <div>
        {
          getThem.map((user, i) =>
            {
             return(<Card 
                key={i}
                id={getThem[i].id}
                name={getThem[i].name} 
                email={getThem[i].email} />);
            })
        }
      </div>
   );
}
export default Cardlist;