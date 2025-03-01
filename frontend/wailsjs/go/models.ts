export namespace main {
	
	export class Mine {
	
	
	    static createFrom(source: any = {}) {
	        return new Mine(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}

}

