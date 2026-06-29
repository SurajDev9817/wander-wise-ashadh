import { Schema, Model } from "mongoose"
const ExpenseSchema = new Schema(
    {
        name: {
            
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        });
        const BudgetSchema = new Schema({
            total: {
                type: Number,
                default: 0,
            },
            expenses: [ExpenseSchema],

        });
        const TripSchema = new Schema({
            user: {
                type:Schema.Types.ObjectId,
                ref: "User"
                required: true
            },
            title: {
                type: String,
                required: true,
                trim: true,

            },
            description: {
                type: String,
            },
            startDate:{
                type: Date,
                required: true,
            },
            endDate: {
                type: Date,
                required: true,
            },
            destinations: [
                type: String,
                required: true,
                trim: true,
            ],
            budget: BudgetSchema,
            collaborators: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "User"
                },
            ],

        });

        TripSchema.pre("findOneAndUpdate", Function(){
            const expenses = this.getUpdate().budget?.expense;
            if(expenses?.length){
                this.getUpdate().budget.spent+=
                expenses.reduce((acc, expense) => acc + expense.amount, 0) || 0;
                expenses.map((expense) => {
                    expense.date = new Date();
                });
 ;           }
        });
        const Trip( = model("Trip", TripSchema));
        export default Trip;