import React, {Component, ChangeEvent} from "react";

interface TaxCalculatorProps {
    initialIncome? : number; // we will assume that the initial income can be passed as a prop
}

interface TaxCalculatorState {
    income: number;
    taxRate: number;
    tax: number;
}

class TaxCalculator extends Component< TaxCalculatorProps, TaxCalculatorState> {
    constructor(props: TaxCalculatorProps) {
        super(props);
        this.state = {
            income: props.initialIncome || 0,
            taxRate: 0.1, // fixed tax rate as 10%
            tax: 0
        }
        console.log("Constructor: initializing state and binding methods");
        
    }
    // Mounting phase methods
    // 1. getDerivedStateFromProps : sync state with props during mount and unmount
    static getDerivedStateFromProps( nextProps: TaxCalculatorProps, prevState: TaxCalculatorState) {
        console.log("getDerivedStateFromProps is checking if the income needs to be updated form the props");

        if ( nextProps.initialIncome !== undefined && nextProps.initialIncome !== prevState.income) {
            return {
                income: nextProps.initialIncome,
                tax: nextProps.initialIncome + prevState.taxRate
            }
        }
        return null; // no state change 
    }

    // component did mount 
    componentDidMount(): void {
        console.log("Component has been mounted and inializing tax calculations");
        this.calculateTax();
        
        
    }
    calculateTax = () => {
        const tax = this.state.income * this.state.taxRate;
        this.setState({tax})
    }
}



export default TaxCalculator