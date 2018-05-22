import React from 'react';
  const clientId =
  '20312876fde7e2ccf8fbe9f4c896e3752bbfbbebed17c3501c97a99e714044d2';
  const endpoint = 'https://api.unsplash.com/search/photos';

export default class Hello extends React.Component{
  constructor(){
    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      images: []
    }
  }
  
  search(){
    fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
    .then(response=>{
     return response.json()
    }).then(jsonResponse=>{
      console.log(jsonResponse);
      this.setState({
        images: jsonResponse.results
      })
    })
  }

  trackQueryValue(ev){
   this.query =  ev.target.value;
  }
    images(){
      return this.state.images.map(image=>{
        return <img src={image.urls.thumb} key={image.id} />
      })
    }
  render(){
    return(<div>
    <input type="text" onChange={this.trackQueryValue}  />
    <button  onClick={this.search}>Buscar</button>
    <div>{this.images()}</div>
    </div>);
  }
}
