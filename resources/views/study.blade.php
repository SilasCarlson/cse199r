<x-layout>

    <x-slot:title>Study - {{ $set->name }}</x-slot:title>

    <main class="center-of-screen">
        @foreach ($words as $word)
            <div class="flashcard">
                <div class="front">
                    <p>{{ $word->native_word }}</p>
                </div>
                <div class="back">
                    <p>{{ $word->foreign_word }}</p>
                </div>
            </div>
        @endforeach
    </main>

</x-layout>