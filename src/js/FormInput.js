const FormInput = props => {
    return React.createElement('div', {className: "form-group"},
        [
            React.createElement('button', 
            {
                className: "btn", type: "submit"
            },
            "Submit"
            )
        ]      
    )

};