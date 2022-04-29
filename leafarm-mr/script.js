const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const data = {
  Pepper__bell___Bacterial_spot: {
    Name: "पेपरबेल बॅक्टेरियल स्पॉट",
    Cure: "कॉपर स्प्रेचा वापर (बुरशीनाशक)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Pepper__bell___healthy: {
    Name: "निरोगी पेपरबेल",
    Cure: "-",
    Link: "-",
  },
  Tomato_Leaf_Mold: {
    Name: "टोमॅटो लीफ मोल्ड",
    Cure: "कॉपर स्प्रेचा वापर (बुरशीनाशक)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_YellowLeaf__Curl_Virus: {
    Name: "टोमॅटो येलो लिफ कर्ल वायरस",
    Cure: "जलसिंचन किंवा इतर कोणत्याही माध्यमातून न्युनिकोटिनोइड कीटकनाशकाची फवारणी करावी.",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_healthy: {
    Name: "निरोगी टोमॅटो",
    Cure: "-",
    Link: "-",
  },
  Tomato_Bacterial_spot: {
    Name: "टोमॅटो जिवाणू स्पॉट",
    Cure: "बागेतील जुने भाजीपाला मोडतोड काढून टाका आणि नवीन पिके लावू नका जेथे यजमान झाडे एकेकाळी वाढली होती आणि बुरशीनाशक वापरा.",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Septoria_leaf_spot: {
    Name: "टोमॅटो सेप्टोरिया लीफ स्पॉट",
    Cure: "कॉपर स्प्रेचा वापर (बुरशीनाशक)",
    Link: "https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=asc_df_B07DQL6VT6/?tag=googleshopdes-21&linkCode=df0&hvadid=397009291831&hvpos=&hvnetw=g&hvrand=16490552948066868948&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301185&hvtargid=pla-838319413916&psc=1&ext_vrnc=hi",
  },
  Tomato_Spider_mites_Two_spotted_spider_mite: {
    Name: "टोमॅटो स्पायडर माइट्स दोन-स्पॉटेड स्पायडर माइट्स",
    Cure: "मायटीसाइड नावाचे कीटकनाशक लावा.",
    Link: "https://www.amazon.in/Veganie-x-Neem-Oil-Spray-Gardening/dp/B09Q96W2ZT/ref=asc_df_B09Q96W2ZT/?tag=googleshopdes-21&linkCode=df0&hvadid=545088175664&hvpos=&hvnetw=g&hvrand=14689257005258475059&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1613246208692&th=1",
  },
  Tomato_Early_blight: {
    Name: "टोमॅटो अर्ली ब्लाइट",
    Cure: "बोनाइड लिक्विड कॉपर बुरशीनाशकाची फवारणी करा.",
    Link: "https://www.amazon.com/Bonide-811-Copper-Fungicide-473ML/dp/B00BSULSHA",
  },
  Tomato__Target_Spot: {
    Name: "टोमॅटो टार्गेट स्पॉट",
    Cure: "मॅन्कोझेब आधारित बुरशीनाशकाची फवारणी करा.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-भाज्या/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Late_blight: {
    Name: "बटाटा लेट ब्लाइट",
    Cure: "डकोनिल बुरशीनाशक कॉन्सन्ट्रेट नावाच्या बुरशीनाशकाची फवारणी करा.",
    Link: "https://www.amazon.in/Daconil-Fungicide-Concentrate-16-oz/dp/B000RUGIY0",
  },
  Potato___healthy: {
    Name: "निरोगी बटाटा",
    Cure: "-",
    Link: "-",
  },
  Tomato_Late_blight: {
    Name: "टोमॅटो लेट ब्लाइट",
    Cure: "मॅन्कोझेब आधारित बुरशीनाशकाची फवारणी करा.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-भाज्या/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Potato___Early_blight: {
    Name: "बटाटा अर्ली ब्लाइट",
    Cure: "मॅन्कोझेब आधारित बुरशीनाशकाची फवारणी करा.",
    Link: "https://www.amazon.in/Dow-Agrosciences-Dithane%C3%82%C2%AE-Fungicide-भाज्या/dp/B08MQG3Z47/ref=asc_df_B08MQG3Z47/?tag=googleshopdes-21&linkCode=df0&hvadid=396986444787&hvpos=&hvnetw=g&hvrand=9720395357961271083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301910&hvtargid=pla-1402350129067&psc=1&ext_vrnc=hi",
  },
  Tomato__Tomato_mosaic_virus: {
    Name: "टोमॅटो मोज़ेक व्हायरस",
    Cure: "सर्व संक्रमित झाडे काढून टाका आणि नष्ट करा (जाळून टाका). त्यानंतर ७०% आयसोप्रोपील अल्कोहोलने बागकामाची साधने निर्जंतुक करा आणि या रोगाला कारणीभूत असलेल्या कीटकांना तुमच्या झाडांना संसर्ग होण्यापासून रोखण्यासाठी तुमच्या झाडांना फ्लोटिंग रो कव्हर किंवा अॅल्युमिनियम फॉइल आच्छादनाने झाकून टाका.",
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
        document.querySelector(".affected").innerText = "नाही";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = "-";
        document.querySelector(".cure-link").innerText = "-";
      } else if (res === "Tomato__Tomato_mosaic_virus") {
        document.querySelector(".is-affected").innerText = "होय";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: white; cursor: pointer;" href="${buyLink}" target="blank">येथे क्लिक करा</a>`;
      } else {
        document.querySelector(".affected").innerText = "होय";
        document.querySelector(".disease-name").innerText = data[res]["Name"];
        document.querySelector(".cure").innerText = data[res]["Cure"];
        let buyLink = data[res]["Link"];
        document.querySelector(
          ".cure-link"
        ).innerHTML = `<a style="text-decoration: none; color: blue; cursor: pointer;" href="${buyLink}" target="blank">येथे क्लिक करा</a>`;
      }
    });
};
