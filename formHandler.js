document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateAndSendForm);
    } else {
        console.error("Le formulaire avec l'ID 'contactForm' n'existe pas dans le DOM.");
    }
});

// section de formulaire corrigée pour le traitement et l'envoi des données
function validateAndSendForm(event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    // Effacer les anciens messages d'erreur
    document.getElementById("errorFullname").style.visibility = "hidden";
    document.getElementById("errorEmail").style.visibility = "hidden";
    document.getElementById("errorMessage").style.visibility = "hidden";

    // Récupération des valeurs des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    // Validation du champ Nom complet
    if (name === "" || !/^[a-zA-ZÀ-ÿ\s-]+$/.test(name)) {
        document.getElementById("errorFullname").innerText = "Veuillez entrer un nom complet valide.";
        document.getElementById("errorFullname").style.visibility = "visible";
        valid = false;
    }

    // Validation du champ Email
    if (email === "" || !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("errorEmail").innerText = "Veuillez entrer un email valide.";
        document.getElementById("errorEmail").style.visibility = "visible";
        valid = false;
    }

    // Validation du champ Message
    if (message === "") {
        document.getElementById("errorMessage").innerText = "Veuillez entrer un message.";
        document.getElementById("errorMessage").style.visibility = "visible";
        valid = false;
    }

}


// pour la section d'avis client
function ouvrirFormulaire() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("formulaire").style.display = "block";
  }
  
  function fermerFormulaire() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("formulaire").style.display = "none";
  }

// ______________________________________________________________ 


document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  // Récupérer les données du formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Structure des données pour Make Webhook
  const formData = {
      name,
      email,
      message,
  };

  try {
      // Envoyer les données vers Make Webhook
      const response = await fetch("https://hook.us2.make.com/gtrraqtkdwld93t5lcvi9p97jip5397s", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert("Votre soumission a été envoyée avec succès!");
      } else {
          alert("Erreur lors de l'envoi, veuillez réessayer.");
      }
  } catch (error) {
      console.error("Erreur : ", error);
      alert("Erreur réseau, veuillez vérifier votre connexion.");
  }
});




document.getElementById("").addEventListener("submit", async function (event) {
  event.preventDefault();

  // Récupérer les données du formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Structure des données pour Airtable
  const airtableData = {
      fields: {
          Nom: name,      // Colonne "Nom" dans Airtable
          Email: email,   // Colonne "Email" dans Airtable
          Message: message // Colonne "Message" dans Airtable
      }
  };

  try {
      // Envoyer les données vers Airtable
      const response = await fetch("https://airtable.com/appOFaE0JLzKumCR7/FormSubmission", {
          method: "POST",
          headers: {
              "Authorization": "patLdRjThQ5NLMXVF.29cea6b64b397857168f864e47d4367c1e3f58224ecdb2c2d50323fecaa042fd", // Remplacez par votre jeton personnalisé
              "Content-Type": "application/json",
          },
          body: JSON.stringify(airtableData),
      });

      // Vérifier la réponse d'Airtable
      if (response.ok) {
          alert("Votre soumission a été envoyée avec succès!");
      } else {
          const errorResponse = await response.json();
          console.error("Erreur de l'API Airtable : ", errorResponse);
          alert("Erreur lors de l'envoi, vérifiez les données ou les autorisations.");
      }
  } catch (error) {
      console.error("Erreur réseau : ", error);
      alert("Problème de connexion, veuillez réessayer plus tard.");
  }
});




