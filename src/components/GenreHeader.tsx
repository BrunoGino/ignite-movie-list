interface GenreHeaderProps {
    genreName: string;
}

export function GenreHeader({ genreName }: GenreHeaderProps) {
    return (
        <header>
            <span className="category">
                Categoria:<span> {genreName}</span>
            </span>
        </header>
    );
}