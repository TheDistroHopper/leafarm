const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const data = {
  Pepper__bell___Bacterial_spot: {
    Name: "पेपरबेल बॅक्टेरियल स्पॉट",
    Cure: "कॉपर स्प्रे (कवकनाशी) का उपयोग",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Pepper__bell___healthy: {
    Name: "स्वस्थ पेपरबेल",
    Cure: "-",
    Link: "-",
  },
  Tomato_Leaf_Mold: {
    Name: "टोमॅटो लीफ मोल्ड",
    Cure: "कॉपर स्प्रे (कवकनाशी) का उपयोग",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_YellowLeaf__Curl_Virus: {
    Name: "टोमॅटो येलो लिफ कर्ल वायरस",
    Cure: "सिंचाई या किसी अन्य माध्यम से नेओनिकोटिनोइड कीटनाशक का छिड़काव करें.",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_healthy: {
    Name: "स्वस्थ टोमॅटो",
    Cure: "-",
    Link: "-",
  },
  Tomato_Bacterial_spot: {
    Name: "टोमॅटो बैक्टीरियल स्पॉट",
    Cure: "बगीचे में पुरानी सब्जियों के मलबे को हटा दें और नई फसलें न लगाएं जहां कभी मेजबान पौधे उग रहे हों और कवकनाशी का उपयोग करें.",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Septoria_leaf_spot: {
    Name: "टोमॅटो सेप्टोरिया लीफ स्पॉट",
    Cure: "कॉपर स्प्रे (कवकनाशी) का उपयोग",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Spider_mites_Two_spotted_spider_mite: {
    Name: "टोमॅटो स्पायडर माइट्स दोन-स्पॉटेड स्पायडर माइट्स",
    Cure: "माइटिसाइड नामक कीटनाशक का प्रयोग करें.",
    Link: "https://www.amazon.in/Veganie-x-Neem-Oil-Spray-Gardening/dp/B09Q96W2ZT/ref=asc_df_B09Q96W2ZT/?tag=googleshopdes-21&linkCode=df0&hvadid=545088175664&hvpos=&hvnetw=g&hvrand=14689257005258475059&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1613246208692&th=1",
  },
  Tomato_Early_blight: {
    Name: "टोमॅटो अर्ली ब्लाइट",
    Cure: "स्प्रे बोनाइड तरल कॉपर कवकनाशी.",
    Link: "https://www.amazon.com/Bonide-811-Copper-Fungicide-473ML/dp/B00BSULSHA",
  },
  Tomato__Target_Spot: {
    Name: "टोमॅटो टार्गेट स्पॉट",
    Cure: "मैनकोजेब आधारित कवकनाशी का छिड़काव करें.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-सब्जी/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Late_blight: {
    Name: "आलू लेट ब्लाइट",
    Cure: "डैकोनिल फंगसाइड कॉन्सेंट्रेट नामक फफूंदनाशक का छिड़काव करें.",
    Link: "https://www.amazon.in/Daconil-Fungicide-Concentrate-16-oz/dp/B000RUGIY0",
  },
  Potato___healthy: {
    Name: "स्वस्थ आलू",
    Cure: "-",
    Link: "-",
  },
  Tomato_Late_blight: {
    Name: "टोमॅटो लेट ब्लाइट",
    Cure: "मैनकोजेब आधारित कवकनाशी का छिड़काव करें.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-सब्जी/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Early_blight: {
    Name: "आलू अर्ली ब्लाइट",
    Cure: "मैनकोजेब आधारित कवकनाशी का छिड़काव करें.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-सब्जी/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_mosaic_virus: {
    Name: "टोमॅटो मोज़ेक व्हायरस",
    Cure: "सभी संक्रमित पौधों को हटाकर नष्ट कर दें (जला दें)। उसके बाद 70% इसोप्रोपाइल अल्कोहल के साथ बागवानी उपकरणों को कीटाणुरहित करें और अपने पौधों को एक फ्लोटिंग रो कवर या एल्युमिनियम फॉयल मल्च के साथ कवर करें ताकि इस बीमारी को आपके पौधों को संक्रमित करने से रोकने वाले कीड़ों को रोका जा सके।",
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
      console.log(res);
      if (res.includes("healthy")) {
        document.querySelector(".affected").innerText = "नहीं";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = "-";
        document.querySelector(".cure-link").innerText = "-";
      } else if (res === "Tomato__Tomato_mosaic_virus") {
        document.querySelector(".is-affected").innerText = "हाँ";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: white; cursor: pointer;" href="${buyLink}" target="blank">यहाँ क्लिक करें</a>`;
      } else {
        document.querySelector(".affected").innerText = "हाँ";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: blue; cursor: pointer;" href="${buyLink}" target="blank">यहाँ क्लिक करें</a>`;
      }
    });
};
