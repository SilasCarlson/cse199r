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
            <p>Items in this set: {{ $words->count() }}</p>

            <table>
                <tr>
                    <th>Native Word</th>
                    <th>Foreign Word</th>
                </tr>
                @foreach ($words as $word)
                    <tr>
                        <td>{{ $word->native_word }}</td>
                        <td>{{ $word->foreign_word }}</td>
                    </tr>
                @endforeach
            </table>

            <br>

            <p><a href="{{ route("study.index", $set->id) }}">Study this set!</a></p>
        </article>
    </main>

</x-layout>