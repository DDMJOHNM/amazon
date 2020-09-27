<template>
    <main>
        <div class="containe-fluid">
            <div class="row">

                <div class="col-sm-3"></div>  

                <div class="col-sm-6">
                                     
                        <div class="a-spacing-top-medium"></div>
                       
                        <h2 style="text-align: center">Add a new product</h2>
                       
                     <form>

                          <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Category</label>
                               <select classname="a-select-option" style="width:100%">
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                               </select>    
                           </div>         
                            
                            <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Owner</label>
                               <select classname="a-select-option" style="width:100%" >
                                   <option value="1">1</option>
                                   <option value="2">2</option>                            
                               </select>    
                            </div>

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Title</label>
                               <input type="text" class="a-input-text" style="width: 100%" /> 
                            </div>  

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Pricing</label>
                               <input type="number" class="a-input-text" style="width: 100%" /> 
                            </div> 

                             <div class="a-spacing-top-medium">
                               <label class="margin-bottom: 0px">Description</label>
                               <textarea 
                                type="number" 
                                placeholder="Product Description" 
                                style="width: 100%"></textarea> 
                            </div> 

                            <div class="a-spacing-top-medium">
                               <label class="choose-file-button">
                                   <i class="fal fa-plus"></i>
                                   <input type="file" />
                                   <p style="margin-top:-70px">Name of te File</p>
                               </label>                               
                            </div> 
                            <hr/>
                            <div class="a-spacing-top-large">
                               <span class="a-button-register">
                                   <span class="a-button-inner">
                                       <span class="a-button-text" >Add product</span>
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
    
}
</script>
