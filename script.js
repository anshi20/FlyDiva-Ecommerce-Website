const arrayOfTips = [
    {'celebrity': 'Lili Reinhart', 
     'tip': 'Add a bit of oil to your foundation for increased luminosity and a gorgeous glowy look'
    },
    {'celebrity': 'Eva Longoria', 
     'tip': 'Using a bit of concealer as a base on eyelids can help the eye shadow stay in place longer'
    },
    {'celebrity': 'Emily Ratajkowski', 
     'tip': 'Ditch the foundation brush and use your hands ! It allows your makeup to and blend more easily.'
    },
    {'celebrity': 'Ariana Grande', 
     'tip': 'The key to the perfect winged eyeliner look is using an angled brush while ensuring the wing is angled completely upward towards the tail end of your eyebrows.'
    },
    {'celebrity': 'Kim Kardashian', 
     'tip': 'Start the contour from your forehead to your cheeks all the way down to your jawline in a 3 motion'
    },
    {'celebrity': 'Kendall Jenner', 
     'tip': 'Apply bronzer to your forehead and cheeks and then apply the same bronzer to your eyelids.'
    },
];

function generateTip(){
    const random = Number.parseInt(Math.random()*arrayOfTips.length + 1);
    document.querySelector('#tipOutput').textContent = `\"${arrayOfTips[random].tip}\"`;
    document.querySelector('#celebrityOutput').textContent = `~${arrayOfTips[random].celebrity}`;
    
}