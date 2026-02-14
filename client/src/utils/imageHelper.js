const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const IMAGE_STORAGE = import.meta.env.VITE_IMAGE_STORAGE || 'local'

export const getImageUrl = (imagePath) => {
	if (imagePath.startsWith('http')) {
		return imagePath
	}

	if (IMAGE_STORAGE === 'local') {
		return imagePath
	}

	if (IMAGE_STORAGE === 'supabase') {
		if (imagePath.startsWith('/assets/products/')) {
			const filename = imagePath.split('/').pop()
			return `${SUPABASE_URL}/storage/v1/object/public/products/donuts/${filename}`
		}
		
		return imagePath
	}
	return imagePath
}

export const getOptimizedImageUrl = (imagePath, width = 800, height = 800) => {
	const url = getImageUrl(imagePath)
	
	if (IMAGE_STORAGE === 'supabase' && url.includes('supabase.co')) {
		return `${url}?width=${width}&height=${height}&resize=contain&quality=80`
	}
	return url
}