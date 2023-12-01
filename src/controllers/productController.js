// controllers/productSellingStoryController.js
const getProductSellingStory = (req, res) => {
  // Extract request parameters
  const { page_size, page_number, order, cursor, filter, sort } = req.body;

  // Simulate fetching data from a database or external API
  const data = [
    {
      product_selling_story: {
        id: "f1975840-75bb-4815-b1d1-e60453ea70b5",
        article_number: "970004",
        image_filename:
          "product-selling-story.2023-11-20 05-52-42.2023 IEEE ICoDSE.png",
        image_url:
          "https://ccaidauesdevrsg001str001.blob.core.windows.net/core-mhs-suggestion-order/product-selling-story.2023-11-20 05-52-42.2023 IEEE ICoDSE.png?sv=2021-10-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=mV8XoXMJTCrhBgxMgEHagXwVtQy86%2BHOr4nCRmFBk04%3D",
        created_at: "2023-11-20T12:52:42.873",
        updated_at: "2023-11-20T12:52:42.873",
      },
      article_number: "970004",
      sku: "1.0 RET X12 SPRITE",
    },
    {
      product_selling_story: {
        id: "5ec2a83f-7f8e-4324-b1e8-19dfc2626c39",
        article_number: "970293",
        image_filename:
          "product-selling-story_2023-11-20 06-55-42_MicrosoftTeams-image.png",
        image_url:
          "https://ccaidauesdevrsg001str001.blob.core.windows.net/core-mhs-suggestion-order/product-selling-story_2023-11-20 06-55-42_MicrosoftTeams-image.png?sv=2021-10-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=eNQ%2BpROcVCspxINW%2BkaePaGYYP4Hl0hMNuwhmo7K8GM%3D",
        created_at: "2023-01-10T06:15:00",
        updated_at: "2023-11-20T13:55:42.473",
      },
      article_number: "970293",
      sku: "600 PET X24 ADES",
    },
  ];

  // Simulate pagination and cursor handling
  const total_records = data.length;
  const total_page = Math.ceil(total_records / page_size);
  const next_cursor =
    total_records > page_size * page_number ? (page_number + 1).toString() : "";

  // Construct response object
  const response = {
    data,
    keys: [],
    total_records,
    page_number,
    page_size,
    total_page,
    cursor,
    next_cursor,
    order,
  };

  // Send the response
  res.json(response);
};

module.exports = {
  getProductSellingStory,
};
