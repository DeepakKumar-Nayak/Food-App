// const heading = React.createElement('h1', {className:'root'}, 'Hello React')
// const root = ReactDOM.createRoot(document.querySelector('.root'))
// root.render(heading)










{/* <div id= "parent">
    <div id='child'>
        <h1>I am an h1 tag</h1>
    </div>
</div>  */}

// const parent = React.createElement('div', {id:'parent'},
//     React.createElement('div', {id:'child'},
//         React.createElement('h1', {id:'heading'}, 'Iam an h1 Tag')
//     )
// )

// const root = ReactDOM.createRoot(document.querySelector('.root'))
// root.render(parent)


{/* <div id= "parent">
    <div id='child'>
        <h1>I am an h1 tag</h1>
        <h2>Iam an h2 tag</h2>
    </div>
</div>  */}

const parent = React.createElement('div', {id:'parent'},
    React.createElement('div', {id:'child'}, 
        [
            React.createElement('h2', {id:'heading-one'}, 'hello iam first heading Tag'),
            React.createElement('h2', {id:'heading-two'}, 'Hello iam second heading tag')
        ]
    ),
    React.createElement('p', {id:'description'}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus volutpat, eleifend risus nec, suscipit nunc. Fusce semper gravida nibh, vitae auctor nulla posuere vitae. Cras dignissim euismod mattis. Praesent lobortis porta ex at consequat. Fusce eget turpis id arcu eleifend pretium at nec augue. Nulla pretium porttitor tempor. Aenean et est malesuada, mattis leo sed, iaculis lectus.')
)

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(parent)