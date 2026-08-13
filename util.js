      function reloadPage(init)
      {  //Netscape 4.05. Resize Fix
        if (init==true) with (navigator)
        {
          if ((appName=="Netscape")&&(parseInt(appVersion)==4))
          {
            document.pgW=innerWidth; document.pgH=innerHeight; onresize=reloadPage;
          }
        }
        else if (innerWidth!=document.pgW || innerHeight!=document.pgH)
        {
          location.reload()
        };
      } // end reloadPage
     reloadPage(true);
     loaded = false;
