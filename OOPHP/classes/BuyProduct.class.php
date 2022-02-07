<?php

class BuyProduct extends Visa {
    public function getPayment() {
        return $this->visaPayment();
    }
}