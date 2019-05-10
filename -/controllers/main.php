<?php namespace plugins\masonry\controllers;

class Main extends \Controller
{
    public function bind()
    {
        $data = [];

        remap($data, $this->data, 'selector, item_selector');

        $data['options'] = $this->getDefaultOptions();

        ra($data['options'], $this->data('options'));

        $this->js('masonry.pkgd');
        $this->js('imagesloaded.pkgd');
        $this->js('\js\jquery\imagesReady jquery.images-ready');

        $this->widget(':' . $this->data('selector'), $data);
    }

    private function getDefaultOptions()
    {
        return [

        ];
    }
}
