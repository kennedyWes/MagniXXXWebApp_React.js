import * as React from 'react';
import { JSONDATA } from "../../server";
import { useState } from "react";
import { Link } from 'react-router-dom';

import {
    AreaSearch,
    Search,
    TitleHeader,
  } from "../../assets/StyledComponents/header";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
        return (
            <AreaSearch>    
                <Search 
                    type="text"
                    placeholder="O que você procura ?"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} 
                />
                { searchTerm.length > 0 && (
                    <div style={{ position: "relative" }}>
                        <div style={{ height: '200px', overflowY: "scroll", width: "60%", position: "absolute", background: "#FFF" }}>
                            {JSONDATA.filter((value) => {
                                if(searchTerm === "") {
                                    return value
                                } else if (value.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return value
                                }
                            }).map((value, key) => {
                                return (
                                    <div 
                                        className="user" 
                                        key={key}
                                        style={{ display: 'block' }}
                                        >
                                        <p>{value.tipoData}: {value.nome}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </AreaSearch>
        )
}

export default SearchBar;