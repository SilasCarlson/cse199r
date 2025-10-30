<!DOCTYPE HTML>
<HTML lang="en">
    <head>
        <title>{{ $title }} - CSE 199R</title>

        <!-- Metadata -->
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Freshman discovery project" />
        <meta name="author" content="Silas Carlson" />

        @vite(["resources/css/main.css"])
    </head>

    <body>
        <x-navigation />

        {{ $slot }}

        <footer>
            <p>&copy; 2025 Silas Carlson. All Rights Reserved.</p>
        </footer>
    </body>
</HTML>