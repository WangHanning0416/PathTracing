export const fog_functions = /* glsl */`

	float intersectFogVolume( Material material, float u ) {
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );
	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {
		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;
	}

`;
