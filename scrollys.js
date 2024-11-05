      // Para sumar scrollys copiar bloques y cambiar numeros-nombres de variables
      var s1 = document.querySelector("#s1");
      var scrolly = s1.querySelector(".scrolly");
      var sticky = scrolly.querySelector("#sticky-thing1");
      var article = scrolly.querySelector("article");
      var steps = article.querySelectorAll(".step");

      //desde acá
      var s2 = document.querySelector("#s2");
      var scrolly2 = s2.querySelector(".scrolly");
      var sticky2 = scrolly2.querySelector("#sticky-thing2");
      var article = scrolly2.querySelector("article");
      var steps = article.querySelectorAll(".step");
      //hasta acá

      var s3 = document.querySelector("#s3");
      var scrolly3 = s3.querySelector(".scrolly");
      var sticky3 = scrolly3.querySelector("#sticky-thing3");
      var article = scrolly3.querySelector("article");
      var steps = article.querySelectorAll(".step");
      

      var s4 = document.querySelector("#s4");
      var scrolly4 = s4.querySelector(".scrolly");
      var sticky4 = scrolly4.querySelector("#sticky-thing4");
      var article = scrolly4.querySelector("article");
      var steps = article.querySelectorAll(".step");

      var s5 = document.querySelector("#s5");
      var scrolly5 = s5.querySelector(".scrolly");
      var sticky5 = scrolly5.querySelector("#sticky-thing5");
      var article = scrolly5.querySelector("article");
      var steps = article.querySelectorAll(".step");

      // initialize the scrollama
      // agregar tantos scrollers como secciones scrolly
      var scroller = scrollama();
      var scroller2 = scrollama();
      var scroller3 = scrollama();
      var scroller4 = scrollama();
      var scroller5 = scrollama();

      // scrollama event handlers
      function handleStepEnter(response) {
        // response = { element, direction, index }
        var el = response.element;

        // remove is-active from all steps
        // then add is-active to this step
        steps.forEach(step => step.classList.remove('is-active'));
        el.classList.add('is-active');

        // update graphic based on step

        // COPIAR BLOQUES Y REEMPLAZAR NÚMEROS

      //desde acá
        sticky.querySelector("p").innerText = el.dataset.step;
        sticky.style.backgroundSize = el.dataset.size;
        sticky.style.backgroundPosition = el.dataset.position;
       // hasta acá

        
        sticky2.querySelector("p").innerText = el.dataset.step;
        sticky2.style.backgroundSize = el.dataset.size;
        sticky2.style.backgroundPosition = el.dataset.position;

        sticky3.querySelector("p").innerText = el.dataset.step;
        sticky3.style.backgroundSize = el.dataset.size;
        sticky3.style.backgroundPosition = el.dataset.position;

        sticky4.querySelector("p").innerText = el.dataset.step;
        sticky4.style.backgroundSize = el.dataset.size;
        sticky4.style.backgroundPosition = el.dataset.position;

        sticky5.querySelector("p").innerText = el.dataset.step;
        sticky5.style.backgroundSize = el.dataset.size;
        sticky5.style.backgroundPosition = el.dataset.position;
      }


      

      function init() {
        // 2. setup the scroller passing options
        // 		this will also initialize trigger observations
        // 3. bind scrollama event handlers (this can be chained like below)

        // copiar tantos bloques de scroller como instancias y actualizar numeros y ID
          scroller
            .setup({
              step: "#s1 .scrolly article .step",
              offset: 0.6,
              debug: false
            })
            .onStepEnter(handleStepEnter);

          //desde aca
          scroller2
          .setup({
            step: "#s2 .scrolly article .step",
            offset: 0.6,
            debug: false
          })
          .onStepEnter(handleStepEnter);
          //hasta acá

          scroller3
          .setup({
            step: "#s3 .scrolly article .step",
            offset: 0.6,
            debug: false
          })
          .onStepEnter(handleStepEnter);

          scroller4
          .setup({
            step: "#s4 .scrolly article .step",
            offset: 0.6,
            debug: false
          })
          .onStepEnter(handleStepEnter);

          scroller5
          .setup({
            step: "#s5 .scrolly article .step",
            offset: 0.6,
            debug: false
          })
          .onStepEnter(handleStepEnter);


        // setup resize event
        // copiar estos acá también y actualizar numero
        window.addEventListener("resize", scroller.resize);
        window.addEventListener("resize", scroller2.resize);
        window.addEventListener("resize", scroller3.resize);
        window.addEventListener("resize", scroller4.resize);
        window.addEventListener("resize", scroller5.resize);


      }

      // kick things off
      init();