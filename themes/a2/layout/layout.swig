<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title></title>
</head>

<body>
    {#{{ body }}
    
    {% set name = 'freestyle' %}
    {{ name }}
    
    {{ _posts['1']}}
    
    {% for x in post %}
        {{ x }}
    {% endfor %}#}

    this is the layout.swig
    {{ body }}
    
    
    <!--
    Части
    {{ partial('partial/header') }}
    -->

    <!--
    Передаём обратно в partial/header переменную title1
    {{ partial('partial/header', {title1: 'Hello world'}) }}
    
    В самом файле header.swig должно быть {{ title1 }}
    -->

    <!--
    Переменные из конфигурационного файла.
    {{ config.title }}
    {{ config.author }}
    -->
    
</body>

</html>