import React from 'react';

import './Search.scss';

function Search() {
    const [searchField, setSearchField] = React.useState('');


    function handleContactsSearch(e) {
        setSearchField(e.target.value )
    };  

    function hideSearch() {
        document.querySelector(".search").classList.remove("search__is-visible");
        document.querySelector(".app").classList.remove("app__is-visible");
    }

 
    return (
        
        <div className="search" >
            <header className="search__header">
                <button className="search__back " onClick={hideSearch} type="button"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
                <p className="search__title">Buscar Produtos</p>
            </header>

            <main className="drawer__content">
                <div className="search__content">
                    <div className="search__form">
                        <input type="text" className="search__input" placeholder="Buscar por produtos" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Search;