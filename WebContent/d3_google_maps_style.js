//Create the Google Map…
var styledMapType = new google.maps.StyledMapType([
                                                   {
                                                	   featureType: "poi",
                                                	   elementType: "labels",
                                                	   stylers: [
                                                	             { visibility: "off" }
                                                	             ]
                                                   }
                                                   ],
                                                   {name:'Styled Map'}); 
