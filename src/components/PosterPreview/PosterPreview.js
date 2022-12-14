import React from 'react';

import css from './PosterPreview.module.css'

const PosterPreview = ({path}) => {
    return (
        <section className={css.PosterPreview}>
            <img src={`https://image.tmdb.org/t/p/w500${path}`} alt="movie_poster"/>
        </section>
    );
};

export {PosterPreview};