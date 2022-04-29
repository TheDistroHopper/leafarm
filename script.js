const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const data = {
  Pepper__bell___Bacterial_spot: {
    Cure: "Use of copper spray (fungicide)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Leaf_Mold: {
    Cure: "Use of copper spray (fungicide)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_YellowLeaf__Curl_Virus: {
    Cure: "Spray neonicotinoid insecticide through irrigation or any other means.",
    Link: "https://www.amazon.in/Tata-Tafgor-Dimethoate-30-Insecticide/dp/B08KLYMSH4/ref=asc_df_B08KLYMSH4/?tag=googleshopdes-21&linkCode=df0&hvadid=397082121557&hvpos=&hvnetw=g&hvrand=3465117209970529995&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-1189507249114&psc=1&ext_vrnc=hi",
  },
  Tomato_Bacterial_spot: {
    Cure: "Remove old vegetable debris in the garden and do not plant new crops where host plants were once growing, and use a fungicide.",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Septoria_leaf_spot: {
    Cure: "Use of copper spray (fungicide)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Spider_mites_Two_spotted_spider_mite: {
    Cure: "Apply a pesticide called miticide.",
    Link: "https://www.amazon.in/Veganie-x-Neem-Oil-Spray-Gardening/dp/B09Q96W2ZT/ref=asc_df_B09Q96W2ZT/?tag=googleshopdes-21&linkCode=df0&hvadid=545088175664&hvpos=&hvnetw=g&hvrand=14689257005258475059&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1613246208692&th=1",
  },
  Tomato_Early_blight: {
    Cure: "Spray Bonide Liquid Copper Fungicide.",
    Link: "https://www.amazon.com/Bonide-811-Copper-Fungicide-473ML/dp/B00BSULSHA",
  },
  Tomato__Target_Spot: {
    Cure: "Spray mancozeb based Fungicide.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-Vegetables/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Late_blight: {
    Cure: "Spray Fungicide called Daconil Fungicide Concentrate.",
    Link: "https://www.amazon.in/Daconil-Fungicide-Concentrate-16-oz/dp/B000RUGIY0",
  },
  Tomato_Late_blight: {
    Cure: "Spray mancozeb based Fungicide.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-Vegetables/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Early_blight: {
    Cure: "Spray mancozeb based Fungicide.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-Vegetables/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_mosaic_virus: {
    Cure: "Remove all infected plants and destroy (burn) them. After that, disinfect gardening tools with 70% Isopropyl Alcohol and cover your plants with a floating row cover or aluminum foil mulches to prevent the insects that cause this disease from infecting your plants.",
    Link: "https://www.flipkart.com/teklc-70-isopropyl-alcohol-disinfectant-spray-500-ml/p/itm81cd8e888c8d1",
  },
};

const prediction = (form, e) => {
  e.preventDefault();
  const form_data = new FormData(form);
  fetch("https://leafarm.loca.lt/uploader", {
  // fetch("http://e83d-103-211-112-133.ngrok.io/uploader", {
    method: "POST",
    body: form_data,
  })
    .then((r) => r.text())
    .then((res) => {
      if (res.includes("healthy")) {
        document.querySelector(".affected").innerText = "No";
        document.querySelector(".disease-name").innerText = res.replace(
          /_+/g,
          " "
        );
        document.querySelector('.cure').innerText = "-"
        document.querySelector('.cure-link').innerText = "-"
      } else if (res === "Tomato__Tomato_mosaic_virus" ) {
        document.querySelector(".is-affected").innerText = "Yes";
        document.querySelector(".disease-name").innerText = "Tomato mosaic virus"
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: white; cursor: pointer;" href="${buyLink}" target="blank">Click Here</a>`;

      } else {
        document.querySelector(".affected").innerText = "Yes";
        document.querySelector(".disease-name").innerText = res.replace(
          /_+/g,
          " "
        );
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: blue; cursor: pointer;" href="${buyLink}" target="blank">Click Here</a>`;
      }
    });
};
