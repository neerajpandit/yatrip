// import React, { useState } from 'react';
// import { SearchIcon } from '@heroicons/react/outline';


// const SearchBox = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center justify-center">
//      <div className="bg-white">
//      <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleChange}
//         className=" rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 sm:w-full lg:w-96" // Adjusted width for larger screens
//  />
//  <button type="submit" className=" text-black px-4 py-2 rounded">
//  <SearchIcon className="h-6 w-6" /> {/* Search icon */}
//         </button>

//      </div>
//     </form>
//   );
// };

// export default SearchBox;





// SearchBox.jsx
// import React, { useState } from 'react';
// import { SearchIcon } from '@heroicons/react/outline';

// const SearchBox = () => {
//   const [query, setQuery] = useState('');

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

  // const handleSearch = (query) => {
  //   // Handle search functionality here
  //   console.log('Searching for:', query);
  //   // You can perform any action you want based on the search query
  //   // For example, navigate to different pages based on the search query
  //   switch (query.toLowerCase()) {
  //     case 'spiritual':
  //       window.location.href = '/Spiritual'; // Navigate to the spiritual page
  //       break;
  //     case 'adventure':
  //       window.location.href = '/Adventure'; // Navigate to the adventure page
  //       break;
  //     case 'nature':
  //       window.location.href = '/Nature'; // Navigate to the adventure page
  //       break;
  //     case 'populardestination':
  //       window.location.href = '/PopularDestination'; // Navigate to the adventure page
  //       break;
  //     case 'wildlife':
  //       window.location.href = '/WildLife'; // Navigate to the adventure page
  //       break;
  //     case 'cultural':
  //       window.location.href = '/Cultural'; // Navigate to the adventure page
  //       break;
  //     case 'travel':
  //       window.location.href = '/Travel'; // Navigate to the adventure page
  //       break;
  //     case 'hotel':
  //       window.location.href = '/Travel'; // Navigate to the adventure page
  //       break;

  //     //uttarpradesh
  //     case 'uttarpradesh':
  //       window.location.href = '/UttarPradesh'; // Navigate to the adventure page
  //       break;
  //     case 'goa':
  //       window.location.href = '/Goa'; // Navigate to the adventure page
  //       break;
  //     case 'uttrakhand':
  //       window.location.href = '/Uttrakhand'; // Navigate to the adventure page
  //       break;
  //     case 'kerala':
  //       window.location.href = '/Kerala'; // Navigate to the adventure page
  //       break;

  //     case 'rajasthan':
  //       window.location.href = '/Rajasthan'; // Navigate to the adventure page
  //       break;

  //     case 'madhyaPradesh':
  //       window.location.href = '/MadhyaPradesh'; // Navigate to the adventure page
  //       break;
  //     case 'himachalPradesh':
  //       window.location.href = '/HimachalPradesh'; // Navigate to the adventure page
  //       break;
  //       case 'jammuandkashmir':
  //         window.location.href = '/Jammu'; // Navigate to the adventure page
  //         break;
  //     // Add more cases for other search terms and corresponding pages
  //     default:
  //       break;
  //   }
  // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch(query.toLowerCase()); // Convert query to lowercase for case-insensitive comparison
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center justify-center">
//       <div className="bg-white">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={handleChange}
//           className="rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 sm:w-full lg:w-96"
//         />
//         <button type="submit" className="text-black px-4 py-2 rounded">
//           <SearchIcon className="h-6 w-6" />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBox;




// import React, { useState, useEffect } from 'react';
// import { SearchIcon } from '@heroicons/react/outline';
// import { MicrophoneIcon, StopIcon } from '@heroicons/react/solid';


// const SearchBox = () => {
//   const [query, setQuery] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [recognition, setRecognition] = useState(null);

//   useEffect(() => {
//     if (!('webkitSpeechRecognition' in window)) {
//       console.log("Speech recognition not supported");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onstart = () => {
//       console.log("Speech recognition started");
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       console.log("Transcript:", transcript);
//       setQuery(transcript);
//       handleSearch(transcript.toLowerCase());
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       console.log("Speech recognition ended");
//       setIsListening(false);
//     };

//     setRecognition(recognition);

//     return () => {
//       if (recognition) {
//         recognition.stop();
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = (query) => {
//     // Handle search functionality here
//     console.log('Searching for:', query);
//     // You can perform any action you want based on the search query
//     // For example, navigate to different pages based on the search query
//     switch (query.toLowerCase()) {
//       case 'spiritual':
//         window.location.href = '/Spiritual'; // Navigate to the spiritual page
//         break;
//       case 'adventure':
//         window.location.href = '/Adventure'; // Navigate to the adventure page
//         break;
//       case 'nature':
//         window.location.href = '/Nature'; // Navigate to the adventure page
//         break;
//       case 'populardestination':
//         window.location.href = '/PopularDestination'; // Navigate to the adventure page
//         break;
//       case 'wildlife':
//         window.location.href = '/WildLife'; // Navigate to the adventure page
//         break;
//       case 'cultural':
//         window.location.href = '/Cultural'; // Navigate to the adventure page
//         break;
//       case 'travel':
//         window.location.href = '/Travel'; // Navigate to the adventure page
//         break;
//       case 'hotel':
//         window.location.href = '/Travel'; // Navigate to the adventure page
//         break;

//       //uttarpradesh
//       case 'uttarpradesh':
//         window.location.href = '/UttarPradesh'; // Navigate to the adventure page
//         break;
//       case 'goa':
//         window.location.href = '/Goa'; // Navigate to the adventure page
//         break;
//       case 'uttrakhand':
//         window.location.href = '/Uttrakhand'; // Navigate to the adventure page
//         break;
//       case 'kerala':
//         window.location.href = '/Kerala'; // Navigate to the adventure page
//         break;

//       case 'rajasthan':
//         window.location.href = '/Rajasthan'; // Navigate to the adventure page
//         break;

//       case 'madhyaPradesh':
//         window.location.href = '/MadhyaPradesh'; // Navigate to the adventure page
//         break;
//       case 'himachalPradesh':
//         window.location.href = '/HimachalPradesh'; // Navigate to the adventure page
//         break;
//         case 'jammuandkashmir':
//           window.location.href = '/Jammu'; // Navigate to the adventure page
//           break;
//       // Add more cases for other search terms and corresponding pages
//       default:
//         break;
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch(query.toLowerCase());
//   };

//   const toggleListening = () => {
//     if (isListening) {
//       recognition.stop();
//     } else {
//       recognition.start();
//     }
//     setIsListening(!isListening);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center justify-center">
//       <div className="bg-white">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={handleChange}
//           className="rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 sm:w-full lg:w-96"
//         />
//         <button type="submit" className="text-black px-4 py-2 rounded">
//           <SearchIcon className="h-6 w-6" />
//         </button>
//         <button onClick={toggleListening} className="ml-2 text-black px-4 py-2 rounded">
//   {isListening ? <StopIcon className="h-6 w-6" /> : <MicrophoneIcon className="h-6 w-6" />}
// </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBox;


import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/solid';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.log("Speech recognition not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Speech recognition started");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Transcript:", transcript);
      setQuery(transcript); // Set the query state with the recognized transcript
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      handleSearch(query.toLowerCase()); // Perform search when speech recognition ends
      setIsListening(false);
    };

    setRecognition(recognition);

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (query) => {
    // Handle search functionality here
    console.log('Searching for:', query);

    const searchMappings = {
        spiritual: '/Spiritual',
        adventure: '/Adventure',
        nature: '/Nature',
        populardestination: '/PopularDestination',
        wildlife: '/WildLife',
        cultural: '/Cultural',
        travel: '/Travel',
        hotel: '/Travel',
        uttarpradesh: '/UttarPradesh',
        goa: '/Goa',
        uttrakhand: '/Uttrakhand',
        kerala: '/Kerala',
        rajasthan: '/Rajasthan',
        madhyapradesh: '/MadhyaPradesh',       
        himachalpradesh: '/HimachalPradesh',
        jammuandkashmir: '/Jammu',
       
        // Add more search term variations as needed
    };

    const formattedQuery = query.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
    const destination = searchMappings[formattedQuery];

    if (destination) {
        window.location.href = destination; // Navigate to the corresponding page
    } else {
        // Handle case when search term is not found
        console.log('Search term not found:', query);
    }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query.toLowerCase());
  };

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="bg-white">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 sm:w-full lg:w-96"
        />
        <button type="submit" className="text-black px-4 py-2 rounded">
          <SearchIcon className="h-6 w-6" />
        </button>
        <button onClick={toggleListening} className="ml-2 text-black px-4 py-2 rounded">
          {isListening ? <StopIcon className="h-6 w-6" /> : <MicrophoneIcon className="h-6 w-6" />}
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
