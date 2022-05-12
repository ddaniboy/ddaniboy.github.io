<style>
    body{
        background-color: gray;
    }
</style>

<body>
    <html>
        <h1 style="text-align: center;">BEM VINDO</h1>
    </html>
</body>

<?php
  if(isset($_GET['page']) and $_GET['page'] != "") {
      $path = "pages/".$_GET['page'].".php";
      $very = include($path);
      
      if ($very == ""){
          echo "<h1 style='text-align: center;'>Pagina não encontrada</h1>"
      }

  }
?>