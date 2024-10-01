      // Para sumar scrollys copiar bloques y cambiar numeros-nombres de variables
      var main = document.querySelector("#s1");
      var scrolly = main.querySelector(".scrolly");
      var sticky = scrolly.querySelector("#sticky-thing1");
      var article = scrolly.querySelector("article");
      var steps = article.querySelectorAll(".step");

      //desde acá
      var main2 = document.querySelector("#s2");
      var scrolly2 = main2.querySelector(".scrolly");
      var sticky2 = scrolly2.querySelector("#sticky-thing2");
      var article = scrolly2.querySelector("article");
      var steps = article.querySelectorAll(".step");
      //hasta acá

      // initialize the scrollama
      // agregar tantos scrollers como secciones scrolly
      var scroller = scrollama();
      var scroller2 = scrollama();

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


        // setup resize event
        // copiar estos acá también y actualizar numero
        window.addEventListener("resize", scroller.resize);
        window.addEventListener("resize", scroller2.resize);

      }

      // kick things off
      init();