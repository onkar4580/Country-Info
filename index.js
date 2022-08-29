       const container = document.querySelector('#container');
        const request = new XMLHttpRequest();
        request.open('GET',"https://restcountries.com/v2/name/russia");
        request.send();

        // to get the response
        request.addEventListener('load',function() {         
            const [data] = JSON.parse(this.responseText);
            console.log(data);
            const htmlData = `
            <br><br><br><br><br>
            <div id="card">
            <article>
                <div class="card-body">
                    <img src="${data.flag}" alt="" class="card-body-img">
                    <h1>
                        ${data.name}<span></span>
                    </h1>
                     <p class="card-body-text">capital: ${data.capital}</p>
                </div><br>
                <div class="card-footer">
                    <div class="card-footer-social">
                        <p>Native Language:</p>
                        <h3>${data.nativeName}</h3>
                        
                    </div>
                    <div class="card-footer-social">
                        <p>Population:</p>
                        <h3>${data.population}</h3> 
                    </div>
                    <div class="card-footer-social">
                        <p>Demonym:</p>
                        <h3>${data.demonym}</h3>
                    </div>
                </div>
            </article>
        </div>
             `;
            
            container.insertAdjacentHTML('beforeend',htmlData);


        });
