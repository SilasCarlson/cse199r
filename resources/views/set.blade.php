<x-layout>

    <x-slot:title>{{ $set->name }}</x-slot:title>

    <header>
        <h1>{{ $set->name }}</h1>
    </header>

    <main>
        <article>
            <h1>{{ $set->name }}</h1>
            <hr>
            <p>Description: {{ $set->description }}</p>
            <p>Last updated: {{ date("M jS, Y", strtotime($set->updated_at)) }}</p>
            <p>Items in this set: 0</p>
        </article>
    </main>

</x-layout>