import FeaturesController from "../../../biz/controllers/Features/FeaturesController"

const featuresController = new FeaturesController()

let featuresFN = {
    type: 'POST',
    url: '/v1/features/upload',
    callback: async (ctx) => {
        await featuresController.uploadFiles(ctx)
    }
}

export default {
    featuresFN
}
