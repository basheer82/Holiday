const hotelData = 
      [
   
    {
        name: 'Le Meurice – Dorchester Collection',
        city: 'Paris',
        stars: '* * * * *',
        address: '3 228, Rue De Rivoli, 1st arr., 75001 Paris, France ',
        image: ['./hotels/leMeurice.jpeg', './hotels/leMeurice1.jpeg', './hotels/leMeurice2.jpeg', 
            './hotels/leMeurice3.jpeg','./hotels/leMeurice4.jpeg','./hotels/leMeurice5.jpeg','./hotels/leMeurice6.jpeg']
    },   
    {
        name: 'B&B Hôtel Saint-Denis Porte de Paris',
        city: 'Paris',
        stars: '* * *',
        address: ' Avenue du Docteur Lamaze, 93200 Saint-Denis, France ',
        image: ['./hotels/B&B.jpeg', './hotels/B&B2.jpeg', './hotels/B&B4.jpeg', './hotels/B&B5.jpeg']
    },   
    {
        name: 'Courtyard by Marriott Paris Saint Denis ',
        city: 'Paris',
        stars: '* * * *',
        address: '34 Boulevard De La Liberation, Zac Pleyel, 93200 Saint-Denis, France',
        image: ['./hotels/countryard.jpeg', './hotels/countryard1.jpeg',
                './hotels/countryard3.jpeg','./hotels/countryard5.jpeg', './hotels/countryard6.jpeg']
    },   
    {
        name: 'Hotel Holiday Inn Paris - Porte De Clichy, an IHG Hotel',
        city: 'Paris',
        stars: '* * * *',
        address: ' 2 Rue Du 08 Mai 1945, 92110 Clichy, France',
        image: ['./hotels/holidayinn.jpeg', './hotels/holidayinn2.jpeg', './hotels/holidayinn3.jpeg', './hotels/holidayinn.jpeg',]
    },      
    {
        name: 'Le Bristol Paris',
        city: 'Paris',
        stars: '* * * * *',
        address: '112 rue du Faubourg Saint Honoré, 8th arr., 75008 Paris, France',
        image: ['./hotels/Bristol.jpeg', './hotels/Bristol2.jpeg', './hotels/Bristol3.jpeg', './hotels/Bristol4.jpeg','./hotels/Bristol5.jpeg']
    },   
    {
        name: 'Hotel Lutetia ',
        city: 'Paris',
        stars: '* * * * *',
        address: '45 Boulevard Raspail, 6th arr., 75006 Paris, France',
        image: ['./hotels/lutetia.jpeg', './hotels/lutetia1.jpeg','./hotels/lutetia3.jpeg',
                 './hotels/lutetia4.jpeg', './hotels/lutetia5.jpeg', './hotels/lutetia6.jpeg']
    },   
    {
        name: 'Hôtel Mercure Paris Suresnes Longchamp',
        city: 'Paris',
        stars: '* * * *',
        address: '30 Avenue General De Gaulle, 92150 Suresnes, France',
        image: ['./hotels/Mercure1.jpeg', './hotels/Mercure2.jpeg', './hotels/Mercure3.jpeg']
    },  
     {
        name: 'AC Hotel ',
        city: 'Paris',
        stars: '* * * *',
        address: '2 Rue de la Haye, 93440 Le Bourget, France',
        image: ['./hotels/AC.jpeg', './hotels/Ac1.jpeg', './hotels/Ac2.jpeg', './hotels/Ac3.jpeg' ]
    },
    {
        name: 'The Landmark London',
        city: 'London',
        stars: '* * * * *',
        address: ' 222 Marylebone Road, Westminster Borough, London, NW1 6JQ, United Kingdom',
        image: ['./hotels/landmark.jpeg', './hotels/landmark1.jpeg', './hotels/landmark2.jpeg', 
              './hotels/landmark3.jpeg','./hotels/landmark4.jpeg', './hotels/landmark5.jpeg']
    },
    {
        name: 'Hampton',
        city: 'London',
        stars: '* * *',
        address: '157 Waterloo Road, Lambeth, London, SE1 8XA, United Kingdom ',
        image: ['./hotels/hampton.jpeg', './hotels/hampton2.jpeg', './hotels/hampton3.jpeg', 
            './hotels/hampton4.jpeg','./hotels/hampton5.jpeg']
    },
    {
        name: 'The Clermont London, Victoria',
        city: 'London',
        stars: '* * * *',
        address: '101 Buckingham Palace Road, Westminster Borough, London, SW1W 0SJ, United Kingdom ',
        image: ['./hotels/clermont.jpeg','./hotels/clermont2.jpeg', './hotels/clermont3.jpeg', './hotels/clermont4.jpeg', 
            './hotels/clermont5.jpeg',]
    },
    {
        name: 'The Waldorf Hilton',
        city: 'London',
        stars: '* * * * *',
        address: 'Aldwych, Westminster Borough, London, WC2B 4DD, United Kingdom',
        image: ['./hotels/waldorf.jpeg', './hotels/waldorf1.jpeg', './hotels/waldorf2.jpeg', './hotels/waldorf3.jpeg',
            './hotels/waldorf4.jpeg']
    },
    {
        name: 'Great Scotland Yard Hotel, part of Hyatt',
        city: 'London',
        stars: '* * * * *',
        address: '3-5 Great Scotland Yard, Westminster Borough, London, SW1A2HW, United Kingdom',
        image: ['./hotels/scotland.jpeg', './hotels/scotland1.jpeg', './hotels/scotland2.jpeg', './hotels/scotland3.jpeg',]
    },
    {
        name: 'The May Fair, A Radisson Collection Hotel, Mayfair London',
        city: 'London',
        stars: '* * * * *',
        address: ' Stratton Street, Mayfair, Westminster Borough, London, W1J 8LT, United Kingdom ',
        image: ['./hotels/mayfair.jpeg', './hotels/mayfair1.jpeg', './hotels/mayfair3.jpeg',
              './hotels/mayfair4.jpeg']
    },
    {
        name: 'Hilton London Canary Wharf',
        city: 'London',
        stars: '* * * *',
        address: 'South Quay, Marsh Wall, Tower Hamlets, London, E14 9SH, United Kingdom –',
        image: [ './hotels/hilton1.jpeg', './hotels/hilton3.jpeg',
                './hotels/hilton4.jpeg']
    },
       {
        name: 'The May Fair, A Radisson Collection Hotel, Mayfair London',
        city: 'Italy',
        stars: '* * * * *',
        address: ' Stratton Street, Mayfair, Westminster Borough, London, W1J 8LT, United Kingdom ',
        image: ['./hotels/mayfair.jpeg', './hotels/mayfair1.jpeg', './hotels/mayfair3.jpeg',
              './hotels/mayfair4.jpeg']
    },
    {
        name: 'Hilton London Canary Wharf',
        city: 'Italy',
        stars: '* * * *',
        address: 'South Quay, Marsh Wall, Tower Hamlets, London, E14 9SH, United Kingdom –',
        image: [ './hotels/hilton1.jpeg', './hotels/hilton3.jpeg',
                './hotels/hilton4.jpeg']
    },
        {
        name: 'Hampton',
        city: 'Italy',
        stars: '* * *',
        address: '157 Waterloo Road, Lambeth, London, SE1 8XA, United Kingdom ',
        image: ['./hotels/hampton.jpeg', './hotels/hampton2.jpeg', './hotels/hampton3.jpeg', 
            './hotels/hampton4.jpeg','./hotels/hampton5.jpeg']
    },
    {
        name: 'The Omnia',
        city: 'Switzerland',
        stars: '* * * * *',
        address: ' Auf dem Fels, 3920',
        image: ['./hotels/omnia.jpeg', './hotels/omnia1.jpeg', './hotels/omnia2.jpeg', 
            './hotels/omnia3.jpeg','./hotels/omnia4.jpeg', './hotels/omnia5.jpeg']
    },   
    {
        name: 'Hotel Linde',
        city: 'Switzerland',
        stars: '* * * *',
        address: 'Mellingerstrasse 22, 5400 Baden, Switzerland',
        image: ['./hotels/linde.jpeg', './hotels/linde2.jpeg', './hotels/linde3.jpeg', './hotels/linde4.jpeg',]
    }
    
]
export default hotelData
