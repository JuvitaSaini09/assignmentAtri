import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Nav_Flex1": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "nav_links": {
      "callbacks": {}
    },
    "nav_link": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "heroSectionCol2": {
      "callbacks": {}
    },
    "heroSectionCol1": {
      "callbacks": {}
    },
    "heroSectionBtns": {
      "callbacks": {}
    },
    "brands": {
      "callbacks": {}
    },
    "brandsLogo": {
      "callbacks": {}
    },
    "browseMenu": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "menu1": {
      "callbacks": {}
    },
    "Div35": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Div36": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div38": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "aboutUsFlex": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div44": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Div67": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Div116": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Div117": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Div133": {
      "callbacks": {}
    },
    "Div137": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Div136": {
      "callbacks": {}
    },
    "Div161": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Div163": {
      "callbacks": {}
    },
    "Div164": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Div162": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Div165": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Div166": {
      "callbacks": {}
    },
    "Div169": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Div167": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Div171": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Div180": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Div186": {
      "callbacks": {}
    },
    "Div187": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Div188": {
      "callbacks": {}
    },
    "Div189": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Div192": {
      "callbacks": {}
    },
    "Div193": {
      "callbacks": {}
    },
    "Div203": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Div204": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Div206": {
      "callbacks": {}
    },
    "Div205": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Div208": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Div209": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Flex175": {
      "callbacks": {}
    },
    "Div210": {
      "callbacks": {}
    },
    "Flex178": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Flex177": {
      "callbacks": {}
    },
    "Div211": {
      "callbacks": {}
    },
    "Flex176": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "logo",
        "src": "/app-assets/burgerIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navlink_home": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navlink_about": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navlink_menu": {
      "custom": {
        "text": "Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navlink_pages": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link22": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "navlink_cart": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "nav_btn2": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "nav_btn1": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionCol2Img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/burgerHeroSection.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionText1": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionText2": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionText3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionBtn2": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "heroSectionBtn1": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "brandsHeading": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "brand1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "brand2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "brand3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "brand4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/breakfastMenu.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mainDishes.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/drinks.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/desserts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button11": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aboutUsBurger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/locationIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/callIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/mailIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "custom": {
        "text": "Join ur team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button16": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classicBurgerMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/choclateMilkshakeMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/classicFriesMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pancakesMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/regularSodaMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/eggToastMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "Egg Toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/chickenBurgerMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/iceCreamMenu.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button18": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div65": {
      "callbacks": {}
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/largeBurger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button21": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image94": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/articleBurger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox204": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox205": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox206": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image104": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/articleChickenBurger.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox213": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image108": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/articleBurger2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image102": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/articleFries.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox212": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image107": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/articlePastery.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image155": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rightArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox261": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox262": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button37": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button38": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox259": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox260": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image149": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/profile.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox258": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image150": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image151": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image152": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image153": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image154": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image156": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/leftArrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox270": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox271": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image160": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/mailIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox267": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image161": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/callIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox268": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox269": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image162": {
      "custom": {
        "alt": "location ",
        "src": "/app-assets/locationIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox274": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button40": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input17": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us ?"
      },
      "callbacks": {}
    },
    "TextBox280": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angles"
      },
      "callbacks": {}
    },
    "Input10": {
      "custom": {
        "value": "",
        "placeholder": "(121) 678-789"
      },
      "callbacks": {}
    },
    "TextBox281": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox282": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input11": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00 PM"
      },
      "callbacks": {}
    },
    "Input12": {
      "custom": {
        "value": "",
        "placeholder": "Day and month"
      },
      "callbacks": {}
    },
    "TextBox283": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox286": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input15": {
      "custom": {
        "value": "",
        "placeholder": "email@gmail.com"
      },
      "callbacks": {}
    },
    "Input16": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "TextBox287": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox288": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button41": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image166": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaBurger1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image167": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaFries1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image172": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaFries1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image173": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaBurger1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image176": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaBurger1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image177": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaFries1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image178": {
      "custom": {
        "alt": "logo",
        "src": "/app-assets/burgerIcon.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox290": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image179": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image180": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image181": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image182": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image183": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/fiveStars.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox292": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox296": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox304": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox305": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox306": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox307": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox308": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox309": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox310": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox311": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox312": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox313": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox315": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox316": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox317": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox318": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox319": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image186": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaFries1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image187": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaBurger1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image184": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaBurger1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image185": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaFries1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
