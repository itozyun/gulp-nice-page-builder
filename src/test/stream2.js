goog.provide( 'test.stream2' );

goog.requireType( 'InstructionHandler' );
goog.requireType( 'NicePageBuilder.PageContext' );

module.exports[ 'onInstruction' ] = module.exports[ 'onInstruction' ] || {};

goog.scope(
    function(){
        const date = new Date;

        let nodata = true;
        
        /** @type {!InstructionHandler} */
        module.exports[ 'onInstruction' ][ 2 ] = {
            /** @this {!NicePageBuilder.PageContext} */
            'title' : function(){
                var meta = this.getMetadata();
        
                return meta ? meta[ 'title' ] : '';
            },
            /** @this {!Through} */
            'date' : function( arg1, arg2, arg3 ){
                if( nodata && this.pause ){
                    this.pause();
                    setTimeout( () => { nodata = false, this.resume() }, 1000 );
                } else {
                    return date.toLocaleString() + arg1 + arg2[ 'aa' ] + arg3;
                };
            }
        };
    }
);
