goog.provide( 'test.stream1' );

goog.requireType( 'InstructionHandler' );
goog.requireType( 'NicePageBuilder.NicePageContext' );

module.exports[ 'onInstruction' ] = module.exports[ 'onInstruction' ] || {};

goog.scope(
    function(){
        const date = new Date;
        
        /** @type {!InstructionHandler} */
        module.exports[ 'onInstruction' ][ 1 ] = {
            /** @this {!NicePageBuilder.NicePageContext} */
            'title' : function(){
                var meta = this.getOptions();
        
                return meta ? meta[ 'title' ] : '';
            },
            'date' : function( arg1, arg2, arg3 ){
                return date.toLocaleString() + arg1 + arg2[ 'aa' ] + arg3;
            }
        };
    }
);
