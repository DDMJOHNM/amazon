<template>
    <main>
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-3"></div>  

                <div class="col-sm-6">
                                     
                        <div class="a-spacing-top-medium"></div>
                       
                        <h2 style="text-align: center">Add a new product</h2>
                       
                     <form>

                          <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Category</label>
                               <select classname="a-select-option" style="width:100%" v-model="categoryID">
                                   <option 
                                    v-for="category in categories" 
                                    :value="category._id"
                                    :key="category._id">
                                    {{category.type}}
                                    </option>                                  
                               </select>    
                           </div>         
                            
                            <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Owner</label>
                               <select classname="a-select-option" style="width:100%" v-model="ownerID">
                                   <option    
                                    v-for="owner in owners" 
                                    :value="owner._id"
                                    :key="owner._id">
                                    {{owner.name}}</option>                                                            
                               </select>    
                            </div>

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Title</label>
                               <input type="text" class="a-input-text" style="width: 100%" v-model="title" /> 
                            </div>  

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Pricing</label>
                               <input type="number" class="a-input-text" style="width: 100%"  v-model="price"  /> 
                            </div> 

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">stockQuantity</label>
                               <input type="number" class="a-input-text" style="width: 100%" v-model="stockQuantity"  /> 
                            </div>

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Description</label>
                               <textarea 
                                v-model="description" 
                                type="number" 
                                placeholder="Product Description" 
                                style="width: 100%"></textarea> 
                            </div> 

                            <div class="a-spacing-top-medium">
                               <label class="choose-file-button">
                                   <i class="fas fa-plus"></i>
                                    <input type="file" @change="onFileSelected"/>
                                   <p style="margin-top:-70px">{{ fileName }}</p>
                               </label>                               
                            </div> 
                            <hr/>
                            <div class="a-spacing-top-large">
                               <span class="a-button-register">
                                   <span class="a-button-inner">
                                       <span class="a-button-text" @click="onAddProduct" >Add product</span>
                                   </span>
                                </span>     
                            </div>
                            
                       </form>    
                    
                    </div>           
                 
                <div class="col-sm-3"></div>       
            </div>    
        </div>    
    </main>    
</template>

<script>
export default {
    
    async asyncData({ $axios }){

        try {
                        
            let categories = $axios.$get('http://localhost:3000/api/categories');
            let owners = $axios.$get('http://localhost:3000/api/owners');

            const [catResponse,ownerResponse] = await Promise.all([
                categories,
                owners

            ]);

            return {
                categories: catResponse.categories,
                owners: ownerResponse.owners
            };

        } catch (err){
            
            console.log(err);
        }
    },

    data(){
        return{
            categoryID: null,
            ownerID:null,
            title:"",
            price:0,
            description:"",
            stockQuantity: 1,
            selectedFile: null,
            fileName:""

       };
    }, methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;
        }, async onAddProduct(){
            let data = new FormData();
            data.append("title", this.title);
            data.append("price", this.price);
            data.append("description", this.description);
            data.append("stockQuantity", this.stockQuantity);
            data.append("ownerID", this.ownerID);
            data.append("categoryID", this.categoryID);
            data.append("photo", this.selectedFile,this.selectedFile.name);

            let result = await this.$axios.$post('http://localhost:3000/api/products',data);
            this.$router.push("/");
        }
    }
}
</script>
